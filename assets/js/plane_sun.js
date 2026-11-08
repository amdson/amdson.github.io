// Which side of the airplane is sunniest?
//
// Model: the plane flies the great circle between two airports at constant
// speed. At each moment we compute the sub-solar point and ask how directly
// the sun shines through the windows on each side. "Sunniness" for a side is
// cos(angle between that side's window normal and the sun), clamped at 0, and
// zero when the sun is below the horizon. 100% means the sun is exactly abeam
// and on the horizon: straight in your eyes.
//
// Expects a global `markers` object: { ICAO: [name, city, country, lat, lon, IATA] }
// and (optionally) the `tzlookup` global from tz-lookup for local-time input.

(function () {
	"use strict";

	// ---------------------------------------------------------------- vectors
	class Vec3 {
		constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
		clone() { return new Vec3(this.x, this.y, this.z); }
		add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this; }
		sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; }
		scale(s) { this.x *= s; this.y *= s; this.z *= s; return this; }
		addScaled(v, s) { this.x += v.x * s; this.y += v.y * s; this.z += v.z * s; return this; }
		dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; }
		length() { return Math.sqrt(this.dot(this)); }
		normalize() { const l = this.length() || 1; return this.scale(1 / l); }
		static cross(a, b) {
			return new Vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
		}
		angleTo(v) {
			const c = this.dot(v) / (this.length() * v.length());
			return Math.acos(Math.max(-1, Math.min(1, c)));
		}
	}

	// Earth-fixed frame: x toward lat 0 / lon 0, y toward lon 90E, z toward the north pole.
	function fromLatLon(latRad, lonRad) {
		return new Vec3(Math.cos(latRad) * Math.cos(lonRad), Math.cos(latRad) * Math.sin(lonRad), Math.sin(latRad));
	}
	const DEG = Math.PI / 180;

	// ------------------------------------------------------------ great circle
	// Position, forward direction, and left-window direction along the shortest
	// great-circle route from r1 to r2, parameterised by fraction t in [0, 1].
	class GreatCircle {
		constructor(r1, r2) {
			this.r1 = r1.clone().normalize();
			this.theta = this.r1.angleTo(r2);
			// Unit vector perpendicular to r1, in the plane of r1 and r2, pointing toward r2.
			const proj = this.r1.clone().scale(r2.dot(this.r1));
			this.rn = r2.clone().sub(proj).normalize();
		}
		position(t) {
			const a = t * this.theta;
			return this.r1.clone().scale(Math.cos(a)).addScaled(this.rn, Math.sin(a));
		}
		forward(t) {
			const a = t * this.theta;
			return this.r1.clone().scale(-Math.sin(a)).addScaled(this.rn, Math.cos(a));
		}
		// up x forward = left. (Northbound at the equator: x cross z = -y = west.)
		left(t) { return Vec3.cross(this.position(t), this.forward(t)); }
		distanceKm() { return this.theta * 6371; }
	}

	// --------------------------------------------------------------- the sun
	// Low-precision solar position, after suncalc (Vladimir Agafonkin, BSD).
	const dayMs = 86400000, J1970 = 2440588, J2000 = 2451545;
	function toDays(date) { return date.valueOf() / dayMs - 0.5 + J1970 - J2000; }
	const OBLIQUITY = 23.4397 * DEG;
	function rightAscension(l) { return Math.atan2(Math.sin(l) * Math.cos(OBLIQUITY), Math.cos(l)); }
	function declination(l) { return Math.asin(Math.sin(OBLIQUITY) * Math.sin(l)); }
	function eclipticLongitude(d) {
		const M = (357.5291 + 0.98560028 * d) * DEG;
		const C = (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)) * DEG;
		return M + C + 102.9372 * DEG + Math.PI;
	}
	function greenwichSiderealTime(d) { return (280.16 + 360.9856235 * d) * DEG; }

	// Unit vector from Earth's centre toward the sun, i.e. through the sub-solar point.
	function sunDirection(date) {
		const d = toDays(date);
		const L = eclipticLongitude(d);
		const lat = declination(L);
		const lon = rightAscension(L) - greenwichSiderealTime(d);
		return fromLatLon(lat, lon);
	}

	// Sun counts as "up" a little past geometric horizon: at 11 km the horizon dips ~3.4 deg.
	const HORIZON_DIP = Math.sin(3.4 * DEG);

	// ------------------------------------------------------------ simulation
	function simulate(dep, arr, depTime, arrTime, steps) {
		const path = new GreatCircle(fromLatLon(dep.lat * DEG, dep.lon * DEG), fromLatLon(arr.lat * DEG, arr.lon * DEG));
		const t0 = depTime.valueOf(), t1 = arrTime.valueOf();
		const left = [], right = [], sunUp = [], samples = [];
		for (let i = 0; i <= steps; i++) {
			const t = i / steps;
			const when = new Date(t0 + t * (t1 - t0));
			const s = sunDirection(when);
			const r = path.position(t);
			const up = r.dot(s) > -HORIZON_DIP;
			const ws = path.left(t).dot(s);
			left.push(up ? Math.max(0, ws) : 0);
			right.push(up ? Math.max(0, -ws) : 0);
			sunUp.push(up);
			samples.push({ when, r, s });
		}
		return { path, left, right, sunUp, samples, t0, t1 };
	}

	// -------------------------------------------------------------- colours
	// Blue (no sun) -> bright yellow (sun straight in your eyes).
	const STOPS = [
		[0.00, [0x1e, 0x3a, 0x8a]],
		[0.35, [0x4c, 0x7a, 0xd6]],
		[0.65, [0xd7, 0xdc, 0xa8]],
		[1.00, [0xff, 0xe6, 0x00]],
	];
	function colormap(v) {
		v = Math.max(0, Math.min(1, v));
		for (let i = 1; i < STOPS.length; i++) {
			if (v <= STOPS[i][0]) {
				const [a, ca] = STOPS[i - 1], [b, cb] = STOPS[i];
				const f = (v - a) / (b - a);
				const c = ca.map((x, k) => Math.round(x + (cb[k] - x) * f));
				return `rgb(${c[0]},${c[1]},${c[2]})`;
			}
		}
		return "rgb(255,230,0)";
	}

	// --------------------------------------------------------------- drawing
	function setupCanvas(canvas) {
		const dpr = window.devicePixelRatio || 1;
		const w = canvas.clientWidth || canvas.width, h = canvas.clientHeight || canvas.height;
		canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
		const ctx = canvas.getContext("2d");
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, w, h);
		return { ctx, w, h };
	}

	function drawBar(canvas, values) {
		const { ctx, w, h } = setupCanvas(canvas);
		const n = values.length;
		for (let i = 0; i < n; i++) {
			ctx.fillStyle = colormap(values[i]);
			const x0 = Math.floor((i / n) * w), x1 = Math.ceil(((i + 1) / n) * w);
			ctx.fillRect(x0, 0, x1 - x0, h);
		}
	}

	function drawLegend(canvas) {
		const { ctx, w, h } = setupCanvas(canvas);
		for (let x = 0; x < w; x++) { ctx.fillStyle = colormap(x / (w - 1)); ctx.fillRect(x, 0, 1, h); }
	}

	// Orthographic globe centred on the midpoint of the route.
	function drawGlobe(canvas, sim, dep, arr) {
		const { ctx, w, h } = setupCanvas(canvas);
		const R = Math.min(w, h) / 2 - 6, cx = w / 2, cy = h / 2;
		const mid = sim.path.position(0.5);
		const north = new Vec3(0, 0, 1);
		let up = north.clone().sub(mid.clone().scale(north.dot(mid)));
		if (up.length() < 1e-6) up = sim.path.forward(0.5);
		up.normalize();
		const rightAxis = Vec3.cross(up, mid).normalize();
		const project = v => ({ x: cx + R * v.dot(rightAxis), y: cy - R * v.dot(up), depth: v.dot(mid) });

		// Night side at mid-flight, shaded per pixel.
		// putImageData ignores the DPR transform, so work in backing-store pixels here.
		const sunMid = sim.samples[Math.floor(sim.samples.length / 2)].s;
		const dpr = window.devicePixelRatio || 1, Rp = R * dpr;
		const img = ctx.createImageData(Math.round(2 * Rp), Math.round(2 * Rp));
		for (let py = 0; py < img.height; py++) {
			for (let px = 0; px < img.width; px++) {
				const nx = (px - Rp) / Rp, ny = -(py - Rp) / Rp, rr = nx * nx + ny * ny;
				if (rr > 1) continue;
				const nz = Math.sqrt(1 - rr);
				const p = rightAxis.clone().scale(nx).addScaled(up, ny).addScaled(mid, nz);
				const day = p.dot(sunMid) > 0;
				const k = 4 * (py * img.width + px);
				if (day) { img.data[k] = 235; img.data[k + 1] = 240; img.data[k + 2] = 250; }
				else { img.data[k] = 190; img.data[k + 1] = 200; img.data[k + 2] = 225; }
				img.data[k + 3] = 255;
			}
		}
		ctx.putImageData(img, Math.round((cx - R) * dpr), Math.round((cy - R) * dpr));

		// Graticule every 30 degrees (front side only).
		ctx.strokeStyle = "rgba(0,0,0,0.12)"; ctx.lineWidth = 1;
		const strokePath = pts => {
			ctx.beginPath(); let pen = false;
			for (const v of pts) {
				const p = project(v);
				if (p.depth < 0) { pen = false; continue; }
				if (pen) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y);
				pen = true;
			}
			ctx.stroke();
		};
		for (let lat = -60; lat <= 60; lat += 30) {
			const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push(fromLatLon(lat * DEG, lon * DEG));
			strokePath(pts);
		}
		for (let lon = -180; lon < 180; lon += 30) {
			const pts = []; for (let lat = -90; lat <= 90; lat += 3) pts.push(fromLatLon(lat * DEG, lon * DEG));
			strokePath(pts);
		}
		ctx.strokeStyle = "#333"; ctx.lineWidth = 1.5;
		ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke();

		// Sub-solar track.
		for (const smp of sim.samples) {
			const p = project(smp.s);
			ctx.fillStyle = p.depth >= 0 ? "#e6b800" : "rgba(230,184,0,0.25)";
			ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI); ctx.fill();
		}
		// Flight path.
		ctx.strokeStyle = "#1e3a8a"; ctx.lineWidth = 2.5;
		strokePath(sim.samples.map(smp => smp.r));
		const mark = (v, label) => {
			const p = project(v);
			ctx.fillStyle = "#1e3a8a"; ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI); ctx.fill();
			ctx.fillStyle = "#111"; ctx.font = "12px sans-serif"; ctx.fillText(label, p.x + 6, p.y - 6);
		};
		mark(sim.samples[0].r, dep.code);
		mark(sim.samples[sim.samples.length - 1].r, arr.code);
		// North pole marker.
		const np = project(north);
		if (np.depth >= 0) { ctx.fillStyle = "#111"; ctx.font = "11px sans-serif"; ctx.fillText("N", np.x - 3, np.y - 5); }
	}

	// ----------------------------------------------------------- time zones
	function tzOffsetMinutes(date, tz) {
		const parts = new Intl.DateTimeFormat("en-US", {
			timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
			hour: "2-digit", minute: "2-digit", second: "2-digit",
		}).formatToParts(date);
		const m = {}; for (const p of parts) m[p.type] = p.value;
		const asUtc = Date.UTC(+m.year, +m.month - 1, +m.day, +m.hour, +m.minute, +m.second);
		return (asUtc - date.valueOf()) / 60000;
	}
	// "YYYY-MM-DDTHH:MM" wall-clock time in an IANA zone -> Date.
	function localToUtc(isoLocal, tz) {
		const naive = Date.parse(isoLocal + ":00Z");
		let guess = new Date(naive);
		for (let i = 0; i < 2; i++) guess = new Date(naive - tzOffsetMinutes(guess, tz) * 60000);
		return guess;
	}
	function airportTz(ap) {
		if (typeof tzlookup !== "function") return null;
		try { return tzlookup(ap.lat, ap.lon); } catch (e) { return null; }
	}

	// ------------------------------------------------------------------ UI
	const KEEP_UPPER = new Set(["USA", "UK", "UAE"]);
	function titleCase(s) {
		return s.split(" ").map(w => KEEP_UPPER.has(w) ? w : w.charAt(0) + w.slice(1).toLowerCase()).join(" ");
	}
	function airport(code) {
		const f = markers[code];
		return { code, iata: f[5], name: titleCase(f[0]), city: titleCase(f[1]), country: titleCase(f[2]),
			lat: parseFloat(f[3]), lon: parseFloat(f[4]) };
	}
	function fmtHours(ms) {
		const h = Math.floor(ms / 3600000), m = Math.round((ms % 3600000) / 60000);
		return `${h}h ${String(m).padStart(2, "0")}m`;
	}
	function fmtTime(date, tz) {
		const opts = { hour: "2-digit", minute: "2-digit", hourCycle: "h23", month: "short", day: "numeric", timeZoneName: "short" };
		if (tz) opts.timeZone = tz;
		return new Intl.DateTimeFormat("en-US", opts).format(date);
	}

	document.addEventListener("DOMContentLoaded", function () {
		const $ = id => document.getElementById(id);
		const depSel = $("departure-loc"), arrSel = $("arrival-loc");
		const depTimeIn = $("departure-time"), arrTimeIn = $("arrival-time");
		const utcBox = $("utc-mode");
		const result = $("result"), headline = $("headline"), errBox = $("error");
		const tip = $("bar-tooltip");

		// Populate the pickers, sorted by IATA code.
		const codes = Object.keys(markers).sort((a, b) => markers[a][5].localeCompare(markers[b][5]));
		for (const sel of [depSel, arrSel]) {
			for (const code of codes) {
				const ap = airport(code);
				sel.append(new Option(`${ap.iata} · ${ap.name} (${ap.city}, ${ap.country}) · ${code}`, code));
			}
		}
		if (window.jQuery && jQuery.fn.select2) {
			jQuery(depSel).select2({ placeholder: "Departure airport", width: "100%" });
			jQuery(arrSel).select2({ placeholder: "Arrival airport", width: "100%" });
		}

		// Sensible defaults: SFO -> LHR, departing today at 16:00 local, 10h30 flight.
		depSel.value = "KSFO"; arrSel.value = "EGLL";
		if (window.jQuery) { jQuery(depSel).trigger("change"); jQuery(arrSel).trigger("change"); }
		const today = new Date();
		const pad = n => String(n).padStart(2, "0");
		const ymd = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
		depTimeIn.value = `${ymd}T16:00`;
		const tomorrow = new Date(today.valueOf() + dayMs);
		arrTimeIn.value = `${tomorrow.getFullYear()}-${pad(tomorrow.getMonth() + 1)}-${pad(tomorrow.getDate())}T10:30`;

		function updateTzLabels() {
			const showTz = (sel, label) => {
				const code = sel.value;
				if (!code || utcBox.checked) { label.textContent = utcBox.checked ? "UTC" : ""; return; }
				const tz = airportTz(airport(code));
				label.textContent = tz ? `local time (${tz})` : "UTC (time zone unknown)";
			};
			showTz(depSel, $("departure-tz")); showTz(arrSel, $("arrival-tz"));
		}
		for (const el of [depSel, arrSel, utcBox]) el.addEventListener("change", updateTzLabels);
		updateTzLabels();

		let lastSim = null;

		function run() {
			errBox.hidden = true;
			if (!depSel.value || !arrSel.value || !depTimeIn.value || !arrTimeIn.value) {
				return showError("Pick both airports and both times.");
			}
			const dep = airport(depSel.value), arr = airport(arrSel.value);
			if (dep.code === arr.code) return showError("Departure and arrival airports are the same.");
			const depTz = utcBox.checked ? null : airportTz(dep);
			const arrTz = utcBox.checked ? null : airportTz(arr);
			const depTime = depTz ? localToUtc(depTimeIn.value, depTz) : new Date(depTimeIn.value + ":00Z");
			const arrTime = arrTz ? localToUtc(arrTimeIn.value, arrTz) : new Date(arrTimeIn.value + ":00Z");
			if (isNaN(depTime) || isNaN(arrTime)) return showError("Could not read the times.");
			const durMs = arrTime - depTime;
			if (durMs <= 0) return showError("The flight must arrive after it departs (check the time zones).");
			if (durMs > 30 * 3600000) return showError("That flight is longer than 30 hours. Check the dates.");

			const sim = simulate(dep, arr, depTime, arrTime, 240);
			lastSim = sim;
			const peakL = Math.max(...sim.left), peakR = Math.max(...sim.right);
			const meanL = sim.left.reduce((a, b) => a + b, 0) / sim.left.length;
			const meanR = sim.right.reduce((a, b) => a + b, 0) / sim.right.length;
			const pct = v => `${Math.round(v * 100)}%`;

			let verdict;
			if (peakL < 0.02 && peakR < 0.02) verdict = "Neither side gets any direct sun. Sit wherever you like.";
			else if (Math.abs(peakL - peakR) < 0.05) verdict = "Both sides get about the same peak sun.";
			else verdict = `The ${peakL > peakR ? "left" : "right"} side is sunnier.`;
			headline.textContent = verdict;

			$("peak-left").textContent = pct(peakL);
			$("peak-right").textContent = pct(peakR);
			$("mean-left").textContent = pct(meanL);
			$("mean-right").textContent = pct(meanR);
			$("route-summary").textContent =
				`${dep.iata} → ${arr.iata} · ${Math.round(sim.path.distanceKm()).toLocaleString()} km great circle · ${fmtHours(durMs)} · ` +
				`departs ${fmtTime(depTime, depTz)}, arrives ${fmtTime(arrTime, arrTz)}`;

			// Unhide before drawing so the canvases have real layout sizes.
			result.hidden = false;
			drawBar($("bar-left"), sim.left);
			drawBar($("bar-right"), sim.right);
			drawTicks($("bar-ticks"), durMs);
			drawGlobe($("globe-canvas"), sim, dep, arr);
		}

		function drawTicks(el, durMs) {
			el.innerHTML = "";
			const hours = durMs / 3600000;
			const step = hours > 16 ? 4 : hours > 8 ? 2 : 1;
			for (let h = 0; h <= hours + 1e-9; h += step) {
				const span = document.createElement("span");
				span.textContent = `${h}h`;
				span.style.left = `${(h / hours) * 100}%`;
				el.appendChild(span);
			}
		}

		function showError(msg) { errBox.textContent = msg; errBox.hidden = false; result.hidden = true; }

		// Hover readout on the bars.
		for (const side of ["left", "right"]) {
			const canvas = $(`bar-${side}`);
			canvas.addEventListener("mousemove", ev => {
				if (!lastSim) return;
				const rect = canvas.getBoundingClientRect();
				const f = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
				const i = Math.min(lastSim[side].length - 1, Math.floor(f * lastSim[side].length));
				const when = new Date(lastSim.t0 + f * (lastSim.t1 - lastSim.t0));
				tip.textContent = `+${fmtHours(when - lastSim.t0)} · ${fmtTime(when, "UTC")} · ${side}: ${Math.round(lastSim[side][i] * 100)}%` +
					(lastSim.sunUp[i] ? "" : " (night)");
				tip.style.left = `${ev.pageX + 12}px`; tip.style.top = `${ev.pageY + 12}px`;
				tip.hidden = false;
			});
			canvas.addEventListener("mouseleave", () => { tip.hidden = true; });
		}

		drawLegend($("bar-legend"));
		$("go-button").addEventListener("click", run);
		run();
	});

	// Exposed for testing in a console.
	window.planeSun = { sunDirection, GreatCircle, fromLatLon, simulate, colormap, localToUtc };
})();

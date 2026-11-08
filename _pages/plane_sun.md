---
layout: page
title: Which Side of the Airplane is Sunniest?
permalink: airplane_sun
category: project
---
<style>
  #plane-sun label { display: block; font-size: 0.85em; color: #555; margin-bottom: 2px; }
  #plane-sun .field { margin-bottom: 12px; }
  #plane-sun .row { display: flex; gap: 16px; flex-wrap: wrap; }
  #plane-sun .row > .field { flex: 1 1 260px; }
  #plane-sun input[type=datetime-local] { width: 100%; box-sizing: border-box; padding: 5px; }
  #plane-sun .tz { font-size: 0.8em; color: #777; }
  #plane-sun #go-button { padding: 8px 20px; font-size: 1em; margin-top: 4px; }
  #plane-sun #error { color: #b00020; margin: 10px 0; }
  #plane-sun #headline { font-size: 1.5em; font-weight: 600; margin: 20px 0 4px; }
  #plane-sun #route-summary { color: #555; font-size: 0.9em; margin-bottom: 18px; }
  #plane-sun .bars { display: grid; grid-template-columns: max-content 1fr; gap: 8px 12px; align-items: center; }
  #plane-sun .bars .side { font-weight: 600; }
  #plane-sun .bars .side small { display: block; font-weight: 400; color: #555; font-size: 0.8em; }
  #plane-sun .bars canvas { width: 100%; height: 34px; display: block; border-radius: 4px; border: 1px solid #ccc; cursor: crosshair; }
  #plane-sun #bar-ticks { position: relative; height: 18px; font-size: 0.75em; color: #777; }
  #plane-sun #bar-ticks span { position: absolute; transform: translateX(-50%); }
  #plane-sun #bar-ticks span:first-child { transform: none; }
  #plane-sun #bar-ticks span:last-child { transform: translateX(-100%); }
  #plane-sun .legend { display: flex; align-items: center; gap: 8px; font-size: 0.8em; color: #555; margin: 14px 0 0; }
  #plane-sun .legend canvas { width: 140px; height: 12px; border-radius: 3px; border: 1px solid #ccc; }
  #plane-sun #bar-tooltip { position: absolute; background: #222; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; pointer-events: none; white-space: nowrap; z-index: 10; }
  #plane-sun #globe-canvas { width: 320px; height: 320px; max-width: 100%; display: block; margin: 24px auto 0; }
  #plane-sun .caption { font-size: 0.8em; color: #777; text-align: center; }
  #plane-sun .notes { font-size: 0.9em; color: #444; margin-top: 30px; }
</style>
<script>
  let markers = {{ site.data.gad | jsonify }};
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tz-lookup@6.1.25/tz.js"></script>
<script src="/assets/js/plane_sun.js"></script>

<div id="plane-sun">

<p>Pick a flight and find out which side of the cabin the sun will be shining into, and how hard.</p>

<div class="row">
  <div class="field">
    <label for="departure-loc">Departure airport</label>
    <select id="departure-loc" style="width:100%"><option></option></select>
  </div>
  <div class="field">
    <label for="arrival-loc">Arrival airport</label>
    <select id="arrival-loc" style="width:100%"><option></option></select>
  </div>
</div>
<div class="row">
  <div class="field">
    <label for="departure-time">Departure time <span class="tz" id="departure-tz"></span></label>
    <input type="datetime-local" id="departure-time" name="departure-time">
  </div>
  <div class="field">
    <label for="arrival-time">Arrival time <span class="tz" id="arrival-tz"></span></label>
    <input type="datetime-local" id="arrival-time" name="arrival-time">
  </div>
</div>
<div class="field">
  <label><input type="checkbox" id="utc-mode"> Enter times in UTC instead of airport local time</label>
</div>
<button type="button" id="go-button">Go</button>

<div id="error" hidden></div>

<div id="result" hidden>
  <div id="headline"></div>
  <div id="route-summary"></div>

  <div class="bars">
    <div class="side">Left<small>peak <span id="peak-left"></span> · avg <span id="mean-left"></span></small></div>
    <canvas id="bar-left"></canvas>
    <div class="side">Right<small>peak <span id="peak-right"></span> · avg <span id="mean-right"></span></small></div>
    <canvas id="bar-right"></canvas>
    <div></div>
    <div id="bar-ticks"></div>
  </div>
  <div class="legend">
    <span>no sun</span><canvas id="bar-legend"></canvas><span>sun straight in your eyes</span>
  </div>
  <div id="bar-tooltip" hidden></div>

  <canvas id="globe-canvas"></canvas>
  <div class="caption">Great-circle route (blue) and the point directly under the sun during the flight (yellow). Shading is night at mid-flight.</div>
</div>

<div class="notes">
<h3>How it works</h3>
<p>The plane is assumed to fly the shortest great-circle route at constant speed, and left and right are as seen facing forward in the cabin. At each moment along the way the tool computes where the sun is and asks how squarely it shines through the windows on each side. A side scores 100% when the sun is level with the horizon and directly abeam, so that it shines straight in through the window. It scores 0% when the sun is on the other side of the plane, directly overhead, or below the horizon.</p>
<p>Times are entered in each airport's local time by default, the way they appear on a ticket. Things the model ignores: real routings that bend around weather and jet streams, haze and cloud, the sun's brightness dropping near the horizon, and the fact that window shades exist.</p>
</div>

</div>

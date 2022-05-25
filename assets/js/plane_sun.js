class Vector3 {
	constructor( x = 0, y = 0, z = 0 ) {

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z;

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v, w ) {

		if ( w !== undefined ) {
			return this.subVectors( v, w );
		}

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {
		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v, w ) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;
		// clamp, to handle numerical problems

		return Math.acos(theta);

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}


	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}
}

Vector3.prototype.isVector3 = true;

const _vector = /*@__PURE__*/ new Vector3();

class SpherePath {
	constructor( r1, r2, t1, t2, radius) {
		this.r1 = r1;
		this.r2 = r2;
		this.theta = r1.angleTo(r2); 
		this.rn = r2.clone().sub(r2.clone().projectOnVector(r1)).normalize(); 		
		this.t1 = t1; 
		this.t2 = t2; 
		this.radius = radius; 
	}

	interp(t) {
		var theta = t*this.theta/(this.t2 - this.t1)
		var r = this.r1.clone(); 
		r.multiplyScalar(Math.cos(theta));
		return r.addScaledVector(this.rn, Math.sin(theta)); 
	}

	interp_v(t) {
		var theta = t*this.theta/(this.t2 - this.t1);
		var r = this.r1.clone(); 
		r.multiplyScalar(-Math.sin(theta));
		r.addScaledVector(this.rn, Math.cos(theta)); 
		return r; 
	}

	interp_w(t) {
		var r = this.interp(t); 
		var v = this.interp_v(t); 
		return r.crossVectors(r, v); 
	}
}

function from_coords_deg(lat_i, long_i) {
	lat_i = Math.PI*lat_i/180; long_i = Math.PI*long_i/180; 
	return new Vector3(Math.cos(lat_i)*Math.cos(long_i), Math.cos(lat_i)*Math.sin(long_i), Math.sin(lat_i));
}

function from_coords(lat_i, long_i) {
	return new Vector3(Math.cos(lat_i)*Math.cos(long_i), Math.cos(lat_i)*Math.sin(long_i), Math.sin(lat_i));
}

// var lat_i = 51; var long_i = 0.12; var lat_f = 40; var long_f = 4; 
// var r_i = from_coords_deg(lat_i, long_i); 
// var r_f = from_coords_deg(lat_f, long_f); 
// var path = new SpherePath(r_i, r_f, 0, 1, 100); 

// for (var i = 0; i < 10; i++) {
// 	r = path.interp(i/10); 
// 	v = path.interp_v(i/10); 
// 	w = path.interp_w(i/10); 
// 	console.log(r, v, w); 
// }

var PI   = Math.PI,
    sin  = Math.sin,
    cos  = Math.cos,
    tan  = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad  = PI / 180;

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;

function toJulian(date) { return date.valueOf() / dayMs - 0.5 + J1970; }
function fromJulian(j)  { return new Date((j + 0.5 - J1970) * dayMs); }
function toDays(date)   { return toJulian(date) - J2000; }

function siderealTime(d, lw) { return rad * (280.16 + 360.9856235 * d) - lw; }


// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function rightAscension(l, b) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
function declination(l, b)    { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

// general sun calculations
function solarMeanAnomaly(d) { return rad * (357.5291 + 0.98560028 * d); }
function eclipticLongitude(M) {
    var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
        P = rad * 102.9372; // perihelion of the Earth
    return M + C + P + PI;
}

function sunCoords(d) {
    var M = solarMeanAnomaly(d),
        L = eclipticLongitude(M);
    return {
        dec: declination(L, 0),
        ra: rightAscension(L, 0) + siderealTime(d, PI)
    };
}

class SunPath {
	constructor(start_date, end_date) {
		this.start_date = start_date; //Start/end date in days. 
		this.end_date = end_date; 
	}

	interp(t) {
		var date = t*(this.end_date-this.start_date) + this.start_date; 
		var s1_coords = sunCoords(date); 
		var slat1 = s1_coords['dec'],
		slong1 = s1_coords['ra']; 
		console.log(slat1, slong1); 
		return from_coords(slat1, slong1); 
	}
}

function projVec(ctx, vec, radius=2, fill=false) {
	var svec = vec.clone().multiplyScalar(75);
	svec.z = -svec.z
	svec.add(new Vector3(150, 0, 100)); 
	// console.log("scaled vec", svec); 
	var vx = svec.x, vy = svec.z; 
	ctx.beginPath();
	ctx.arc(vx, vy, radius, 0, 2 * Math.PI);
	ctx.stroke(); 
	if(fill) {
		ctx.fill(); 
	}
	
}

$(document).ready(function () {
	var c1 = document.getElementById("departure-time");
	var c2 = document.getElementById("arrival-time");
	var s1 = document.getElementById("departure-loc");
	var s2 = document.getElementById("arrival-loc");
	for (acr in markers) {
		fields = markers[acr]; 
		var option = new Option(acr + " (" + fields[0] + " " + fields[2] + ")", acr);
		s1.append(option); 
	}   
	for (acr in markers) {
		fields = markers[acr]; 
		var option = new Option(acr + " (" + fields[0] + " " + fields[2] + ")", acr);
		s2.append(option); 
	}   
	$("select").select2();
	var b = document.getElementById("go-button")
	b.addEventListener('click', function () {
		if(s1.value.length > 0 && s2.value.length > 0 && c1.value.length > 0 && c2.value.length > 0) {
			var start_date = toDays(new Date(c1.value)); 
			var end_date = toDays(new Date(c2.value)); 
			console.log(c1.value, c2.value);
			console.log("start Julien", toJulian(new Date(c1.value))); 
			console.log("start date", start_date); 

			if (end_date <= start_date) {
				alert("Flight must arrive after departure."); 
			}

			var sun_path = new SunPath(start_date, end_date); 

			var acr1 = s1.value; var acr2 = s2.value; 
			var f1 = markers[acr1]; var f2 = markers[acr2]; 
			var lat1 = parseFloat(f1[3]),
			long1 = parseFloat(f1[4]),
			lat2 = parseFloat(f2[3]),
			long2 = parseFloat(f2[4]);

			// console.log("Airport coordinates"); 
			// console.log(acr1, lat1, long1); 
			// console.log(acr2, lat2, long2); 

			var r1 = from_coords_deg(lat1, long1); 
			var r2 = from_coords_deg(lat2, long2); 
			var flight_path = new SpherePath(r1, r2, 0, 1, 100); 
			
			var canvas = document.getElementById("globe-canvas");
			var ctx = canvas.getContext("2d");

			var globe_center = new Vector3(0, 0, 0); 
			var north_pole = from_coords(PI/2, 0);
			var south_pole = from_coords(-PI/2, 0); 
			ctx.fillStyle = "green";
			projVec(ctx, north_pole, 2, true);
			projVec(ctx, south_pole, 2, true); 
			ctx.strokeStyle = "black";
			projVec(ctx, globe_center, 75); 
			for (var i = 0; i <= 100; i++) {
				var t = i / 100; 
				var sun_coord = sun_path.interp(t); //Normalized vector. 
				ctx.fillStyle = "yellow";
				projVec(ctx, sun_coord, 0.7, true); 
				var flight_coord = flight_path.interp(t); 
				ctx.fillStyle = "blue";
				projVec(ctx, flight_coord, 2, true); 
			}
		}
	});
});




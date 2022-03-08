---
layout: page
# date: 2022-03-07 14:04:06 -0800
title: Oceanview
permalink: oceanview
---
<html>
	<head>
		<style>
			canvas {
				border-style: solid;
			}
			body {
				background-color: lightblue;
			}
		</style>
	</head>
	<body>
		<p>
			<input onclick="startstop()" type="button" value="Start" id="myButton1" />
			<input onclick="update()" type="button" value="Iterate" id="myButton1" />
		</p>
        <canvas id="myCanvas" width="850" height="600" onmousemove="findMouse(event)"> </canvas>
		<script> 
		class Column {
			constructor(height) {
				this.height = height;
				this.nextheight = 0;
				this.vel = 0;
				this.pressure = 0;
			}
		}
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		var rect = c.getBoundingClientRect();
		var iterator; 
		var running = false;
		c.addEventListener("mousedown", mouseDown, false);
		c.addEventListener("mouseup", mouseUp, false);
		var mouseX = 50; 
		var mouseY = 50;
		var mousedown = false;
		var forcequoque = [];
		var pond = [];
		var size = 25;
		//Initialize a sizeXsize array of Nodes
		for(var i = 0; i < size; i++)
		{
			pond.push(new Array(size));
			for(var j = 0; j < size; j++)
			{
				pond[i][j] = new Column(500);
			}
		}
		//Set the background color
		ctx.fillStyle = "#FFB6C1";
		ctx.fillRect(0,0, c.width, c.height);
		function findMouse(e) {
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top; 
		}
		function mouseDown() {
			mousedown = true; 
		}
		function mouseUp() {
			mousedown = false;
		}
		function rgb(r, g, b){
			return "rgb("+r+","+g+","+b+")";
		}
		function xyzCoords(i, j)
		{
			var coords = [20*i, 20*j, pond[i][j].height-500];
			return coords;
		}
		function dot(a, b)
		{
			if(a.length === b.length)
			{
				var sum = 0;
				for(var i = 0; i < a.length; i++)
				{
					sum += a[i]*b[i];
				}
				return sum;
			}
			else{
				return false;
			}
		}
		function cross(a, b)
		{
			var cross = [ a[1]*b[2] - a[2]*b[1], a[2]*b[0] - a[1]*b[2], a[0]*b[1] - a[1]*b[0] ];
			return cross;

		} 
        
        function length(a) {
			var sum = 0;
			for(var i = 0; i < a.length; i++)
			{
				sum += a[i]*a[i];
			}

			return Math.sqrt(sum);
		}

		function minus(a, b)
		{
			if(a.length === b.length)
			{
				var c = [];
				for(var i = 0; i < a.length; i++)
				{
					c[i] = a[i]-b[i];
				}
				return c;
			}
			else{
				return false;
			}

		}
		//Convert a node into its x, y representation on the screen
		function convert(i, j)
		{
			var coords = [425-17.3205*i+17.3205*j,600-pond[i][j].height+10*i+10*j];
			return coords;
		}
		
		//Manage whether the update event is being called
		function startstop()
		{
			running = !running;
			if(running){
				iterator = setInterval(update, 50);
				document.getElementById("myButton1").value = "Stop";
			}
			else{
				clearInterval(iterator);
				document.getElementById("myButton1").value = "Start";
			}	
		}
		
		function drawUp(i, j)
		{
			var iso1 = convert(i, j);
			var iso2 = convert(i+1, j);
			var iso3 = convert(i, j+1);

			var crossed = cross(minus( xyzCoords(i, j), xyzCoords(i+1, j) ), minus(xyzCoords(i, j), xyzCoords(i, j+1)) );

			var len = length(crossed);
			for(var i = 0; i < 3; i++)
			{
				crossed[i] = crossed[i]/len;
			}

			var view = [0.57735, 0.57735, 0.57735];


			var shade = Math.abs(dot(crossed, view));
			


			ctx.fillStyle = rgb(0, 0, parseInt(shade*255));
			//ctx.fillRect(0,0,20,20);

			ctx.beginPath();
    		ctx.moveTo(iso1[0],iso1[1]);
    		ctx.lineTo(iso2[0],iso2[1]);
    		ctx.lineTo(iso3[0],iso3[1]);
    		//ctx.lineTo(iso1[0],iso1[1]);
   			ctx.fill();
		}

		function drawDown(i, j)
		{
			var iso1 = convert(i, j);
			var iso2 = convert(i-1, j);
			var iso3 = convert(i, j-1);

			var crossed = cross(minus( xyzCoords(i, j), xyzCoords(i-1, j) ), minus(xyzCoords(i, j), xyzCoords(i, j-1)) );

			var len = length(crossed);
			for(var i = 0; i < 3; i++)
			{
				crossed[i] = crossed[i]/len;
			}

			var view = [0.57735, 0.57735, 0.57735];

			var shade = Math.abs(dot(crossed, view));

			ctx.fillStyle = rgb(0, 0, parseInt(shade*255));

			ctx.beginPath();
    		ctx.moveTo(iso1[0],iso1[1]);
    		ctx.lineTo(iso2[0],iso2[1]);
    		ctx.lineTo(iso3[0],iso3[1]);
   			ctx.fill();
		}

		function redraw()
		{

			//Set the color of the nodes' squares and change canvas area. Greener for < 0, bluer for > 0
			ctx.fillStyle = "#FFB6C1";
			ctx.fillRect(0,0, c.width, c.height);
			
			for(var i = 0; i < size-1; i++)
			{
				for(var j = 0; j < size-1; j++)
				{
					drawUp(i, j);
					drawDown(i+1, j+1);
				}
			}

		}
		function update() {

			for(var i = 0; i < size; i++)
			{
				for(var j = 0; j < size; j++)
				{
					pond[i][j].pressure = pond[i][j].height;
				}
			}
			
			
			if(mousedown)
			{
				
				var x1 = mouseX-425;
				var y1 = mouseY-100;

				var sqrx = parseInt(0.05*y1 - 0.0288675*x1);
				var sqry = parseInt(0.05*y1 + 0.0288675*x1);
				if(sqrx >=0 && sqrx <= 24 && sqry >=0 && sqry <= 24)
				{
					pond[sqrx][sqry].pressure += -90;
					if(sqrx < size-1)
					{
						pond[sqrx+1][sqry].pressure += -70;
					}
					if(sqrx > 0)
					{
						pond[sqrx-1][sqry].pressure += -70;
					}
					if(sqry < size-1)
					{
						pond[sqrx][sqry+1].pressure += -70;
					}
					if(sqry > 0)
					{
						pond[sqrx][sqry-1].pressure += -70;
					}
				}
				


			}
			
			
			
			totalheight = 0; 
			for(var i = 0; i < size; i++)
			{
				for(var j = 0; j < size; j++)
				{
					totalheight += pond[i][j].height;
					//console.log(pond[i][j].height+" ");
				}
				//console.log("\n");
			}
			
			//calculate the acceleration for each water column and add it to velocity

			var accel = 0; 
			
			//A quick implementation of surface tension
			for(var i = 1; i < size-1; i++)
			{
				for(var j = 1; j < size-1; j++)
				{
					var avg = (pond[i+1][j].height+pond[i-1][j].height+pond[i][j+1].height+pond[i][j-1].height)/4;
					if(avg>10+pond[i][j].height)
					{
						pond[i][j].pressure -= (avg - pond[i][j].height)/2;
					}
					else if(avg<pond[i][j].height-10)
					{
						pond[i][j].pressure += (pond[i][j].height - avg)/2;
					}
				}
			}
			
			//Velocity bleed between columns
			var slippage = 24;
			for(var i = 0; i < size-1; i++)
			{
				for(var j = 0; j < size-1; j++)
				{
					var diff = 0;
					if(pond[i][j].vel-pond[i+1][j].vel>5)
					{
						diff = pond[i][j].vel-pond[i+1][j].vel;
						pond[i][j].vel -= diff/slippage;
						pond[i+1][j].vel += diff/slippage;
					}
					else if(pond[i][j].vel-pond[i+1][j].vel< -5)
					{
						diff = pond[i][j].vel-pond[i+1][j].vel;
						pond[i][j].vel -= diff/slippage;
						pond[i+1][j].vel += diff/slippage;
					}
					if(pond[i][j].vel-pond[i][j+1].vel>5)
					{
						diff = pond[i][j].vel-pond[i][j+1].vel;
						pond[i][j].vel -= diff/slippage;
						pond[i][j+1].vel += diff/slippage;
					}
					else if(pond[i][j].vel-pond[i][j+1].vel< -5)
					{
						diff = pond[i][j].vel-pond[i][j+1].vel;
						pond[i][j].vel -= diff/slippage;
						pond[i][j+1].vel += diff/slippage;
					}
				}
			}
			
			for(var i = 0; i < size; i++)
			{
				for(var j = 0; j < size; j++)
				{
					accel = 0;
					if(i>0){
						accel += (pond[i][j].pressure - pond[i-1][j].pressure)/(pond[i][j].height + pond[i-1][j].height);
					}
					
					if(i<size-1){
						accel += (pond[i][j].pressure - pond[i+1][j].pressure)/(pond[i][j].height + pond[i+1][j].height);
					}
					
					if(j>0){	
						accel += (pond[i][j].pressure - pond[i][j-1].pressure)/(pond[i][j].height + pond[i][j-1].height);
					}
					
					if(j<size-1){
						accel += (pond[i][j].pressure - pond[i][j+1].pressure)/(pond[i][j].height + pond[i][j+1].height);
					}
					accel *= 1500;
					pond[i][j].vel += 0.4*accel;
					pond[i][j].vel *= 0.99;
					
				}
			}
			
			//Subtract vel from water height
			for(var i = 0; i < size; i++)
			{
				for(var j = 0; j < size; j++)
				{
					pond[i][j].height -= pond[i][j].vel*0.3;
				}
			}
			redraw();
		}
		
		</script>

	</body>
</html>
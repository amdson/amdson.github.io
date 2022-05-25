---
layout: page
# date: 2022-03-07 14:04:06 -0800
title: Which Side of the Airplane is Sunniest? 
permalink: airplane_sun
---
<html>
<head>
    <script>
        let markers = {{ site.data.gad | jsonify}};
     </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="/assets/js/plane_sun.js"></script>
</head>
<body>

<label for="departure-time">Departure time (UTC)</label>
<input type="datetime-local" id="departure-time"
       name="departure-time" value="2018-04-25T06:47">
<label for="arrival-time">Arrival time (UTC)</label>
<input type="datetime-local" id="arrival-time"
       name="arrival-time" value="2018-04-25T06:48">

 <select id="departure-loc" style="width:200px;" class="operator"> 
         <option value="PHNL">Departure Airport</option>
  </select>
  <select id="arrival-loc" style="width:200px;" class="operator"> 
         <option value="PHNL">Arrival Airport</option>
  </select>
<button type="button" id="go-button">Go</button>
<canvas id="globe-canvas" width="300" height="200"></canvas>

</body>

</html>
---
layout: page
# date: 2022-03-07 14:04:06 -0800
title: RTCPvP
permalink: rtcpvp
---
<html>
<head>
    <script>
        let markers = {{ site.data.gad | jsonify}};
     </script>
     <script type="module" crossorigin src="/assets/js/rtcpvp_index.js"></script>
</head>
<body>
    <canvas id="canvas" width="500" height="500"></canvas>

    <button id="startGameButton">Start Local</button>
    <button id="callButton">Create Call (offer)</button>
    <input id="callInput" />
    <button id="answerButton">Join a Game</button>
  </body>

</html>
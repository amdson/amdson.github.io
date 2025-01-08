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
     <script type="module" crossorigin src="/assets/index-DWQiP13g.js"></script>
</head>
<body>
    <canvas id="canvas" width="500" height="500"></canvas>
    <button id="startGameButton" disabled> Begin </button>

    <h2>Start a game</h2>
    <button id="callButton">Create Call (offer)</button>

    <h2>Join a game</h2>
    <input id="callInput" />
    <button id="answerButton">Answer</button>
  </body>

</html>
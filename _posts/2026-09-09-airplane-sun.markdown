---
layout: post
title:  "Which Side of the Airplane is Sunniest?"
date:   2026-09-09 12:00:00 -0700
categories: jekyll update
---

I finally finished a small tool I started years ago: [Which Side of the Airplane is Sunniest?](/airplane_sun) Pick two airports and your departure and arrival times, and it tells you which side of the cabin the sun will be shining into, with a timeline of how hard.

The model is simple. The plane flies the great circle between the airports at constant speed. For each moment along the way, it works out where the sun is and takes the dot product of the sun direction with the window direction on each side. That number is 100% when the sun is level with the horizon and directly abeam, so it shines straight through the window into your eyes, and 0% when the sun is overhead, on the far side, or below the horizon.

The interesting part was getting the sub-solar point right. The sun's position on the sky is easy to get from the standard low-precision formulas, but turning right ascension into a longitude on the Earth means subtracting Greenwich sidereal time, and getting that sign wrong puts the sun on the wrong side of the planet. My first attempt from 2022 had exactly that bug, and separately had left and right swapped. It also never got around to showing the answer.

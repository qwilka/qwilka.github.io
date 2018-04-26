---
layout: post
title: "Finding the fish in GIS"
date: 2018-04-22
---

I recently came across this video in a [Linkedin post](https://www.linkedin.com/feed/update/urn:li:activity:6390252332893900800).  It's a clip of [ROV](https://en.wikipedia.org/wiki/Remotely_operated_underwater_vehicle) video that shows a small strange sea creature apparently walking across the seabed from a pipeline towards the ROV, and encountering a predator along the way:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zKK5qJjI98c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

&nbsp;

This set me wondering about two things: what type of creature is it, and where was the video recorded? The video clip is also available [on YouTube](https://www.youtube.com/watch?v=zKK5qJjI98c), which incorrectly states that the location is in the North Sea. The video overlay indicates that it was recorded in 2002. Commenters on the [Linkedin post](https://www.linkedin.com/feed/update/urn:li:activity:6390252332893900800) identify the creature as a [frog fish](https://en.wikipedia.org/wiki/Frogfish), and the location as offshore Vietnam, based on the [Lan Tay](https://www.rosneft.com/press/releases/item/181439/) identification on the overlay. This would suggest that the pipeline that is visible at the start of the video clip is the [Nam Con Son](https://www.pvgas.com.vn/product-and-service/services/gas-transportation-and-distribution) 26" pipeline, which transports gas from the Lan Tay platform to the Vietnam mainland, and which was installed in 2002. 

![Nam Con Son pipeline route](https://qwilka.github.io/images/NCSP2.jpg)

<div style="font-size:xx-small">(Image adapted from the <a href="http://abarrelfull.wikidot.com/nam-con-son-gas-pipeline">Nam Con Son 2003 Environmental Statement.</a>)</div>

&nbsp;

The video overlay indicates the location water depth and [UTM coordinates](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system), but the UTM zone is not given. The KP 0.102 value on the overlay suggests that the location is close to the platform (since [KPs](https://geodyssey.neocities.org/papers/ahgpp.html) usually follow product flow direction). Initially I thought of writing a program to scan through the indicated coordinate location in all the UTM zones and check the water depth at each location, but since there is a hint that the location is close to the Lan Tay platform offshore Vietnam, I decided it would be quicker to add a capability to query location water depth to the [Qwilka Subsea GIS](https://qwilka.github.io/GIS/), and use that to check the water depth at the suspected location. Right-clicking on the GIS at the indicated coordinate location south-east of Vietnam gives a location which is close enough to the [Lan Tay platform](http://globalenergyobservatory.org/geoid/41214), and gives a depth similar to that indicated on the ROV video overlay, which satifies me that this is the correct location of the frog fish:

[![Lan Tay location](https://qwilka.github.io/images/QwilkaGIS_LanTay.jpg)](https://qwilka.github.io/GIS/)
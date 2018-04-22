---
layout: post
title: "Finding the fish in GIS"
date: 2018-04-22
---

I recently came across this 2002 ROV video of a small strange sea creature apparently walking across the seabed [on Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:6390252332893900800):

<iframe width="560" height="315" src="https://www.youtube.com/embed/zKK5qJjI98c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

It set me wondering about two things: what type of creature is it, and where was the video recorded? The video clip is also available [on YouTube](https://www.youtube.com/watch?v=zKK5qJjI98c), which incorrectly says the location is in the North Sea. Commenters on the [Linkedin post](https://www.linkedin.com/feed/update/urn:li:activity:6390252332893900800) identify the creature as a [frog fish](https://en.wikipedia.org/wiki/Frogfish), and the location as offshore Vietnam, based on the [Lan Tay](https://www.rosneft.com/press/releases/item/181439/) identification on the video overlay. This would suggest that the pipeline that is visible at the start of the video clip is the [Nam Con Son] 26" pipeline(https://www.pvgas.com.vn/product-and-service/services/gas-transportation-and-distribution), which transports gas from the Lan Tay platform to the Vietnam mainland, and which was installed in 2002. 

![Nam Con Son pipeline route](https://qwilka.github.io/images/NCSP2.jpg)
Image adapted from the 
<div align="middle" style="font-family:Arial;font-size:small"><a href="http://abarrelfull.wikidot.com/nam-con-son-gas-pipeline">Nam Con Son Pipelines 2003 Environmental Statement.</a></div>'

The video overlay shows water depth and location [UTM coordinates](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system), but the UTM zone is not given. The KP 0.102 value on the overlay suggests that the location is close to the platform (since [KPs](https://geodyssey.neocities.org/papers/ahgpp.html) usually follow the product flow direction). Initially I thought of writing a program to scan through all the UTM zones and check the water depth at the coordinate locations, but since we have a hint that the location is close to the Lan Tay platform offshore Vietnam, I decided it would be quicker to add a water depth query capability to the [Qwilka Subsea GIS](https://qwilka.github.io/GIS/), and use that to check the water depth at the location. Right-clicking at the appoximate location of Lan Tay on the GIS indicates a water depth of 117m, which is close enough to the indicated depth to make me believe that this is the correct location of the frog fish!

![Lan Tay location](https://qwilka.github.io/images/QwilkaGIS_LanTay.jpg)
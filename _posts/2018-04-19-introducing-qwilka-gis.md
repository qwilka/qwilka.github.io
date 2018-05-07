---
layout: post
title: "Introducing the Qwilka Subsea GIS"
date: 2018-04-19
---

I have just set up a demonstration [GIS](https://en.wikipedia.org/wiki/Geographic_information_system) (geographic information system) for my subsea data company Qwilka. It is built using the open source web mapping library [Leaflet](http://leafletjs.com/), which is lightweight and easy to program. The plan is to use the [Qwilka Subsea GIS](https://qwilka.github.io/GIS/) to display openly available data related to the subsea oil & gas industry. The base map is taken from [GEBCO](https://www.gebco.net/) which provides a global map with ocean bathymetry. There is also an alternative base map from [OpenStreetMap](https://www.openstreetmap.org/) with more land based details like borders, roads and cities. 

&nbsp;

 <iframe src="https://qwilka.github.io/GIS/" height="400" width="750" align="middle" frameborder="1"></iframe> 

 <p align="center">
  <i>Go to webpage:</i><br>
  <a href="https://qwilka.github.io/GIS/">Qwilka Subsea GIS</a>
  <br>
</p>


Hovering the cursor over the he layer control ![layer-control](/images/Leaflet_layer_control.svg){: height="24" width="24" } at the top-right enables selecting data layers for display. The attribution box (bottom-right) provides links to the displayed data sources (links will open in a new tab/window). Right-clicking on the map brings up a popup that displays the location coordinates.


![location pop-up](/images/location_coord_popup.jpg)
 <p align="left">
  <i>Right-clicking at a location gives coordinate information.</i><br>
  <br>
</p>


To start with, I will focus on adding data provided by [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) (web map service) providers, because that's the easiest to set up, it merely involves passing on data that is hosted on the provider's WMS server. Presently there is subsea infrastructure data from the [NPD](http://www.npd.no/en/About-us/Available-data/) (Norwegian Petroleum Directorate) and the [Irish Government](https://data.gov.ie/dataset/offshore-gas-pipeline). I will be adding more open WMS data in due course, as I identify suitable providers. 

There are many other authorities providing subsea infrastructure data in various formats which usually require some processing to convert into a format that can be rendered on the GIS. I am planning to add these data also, in due course.  Here is a list of some of the open subsea data that I am planning to look at:

* [UK offshore activity data](https://www.thecrownestate.co.uk/energy-minerals-and-infrastructure/downloads/maps-and-gis-data/)
* [Oil and Gas Pipelines of Australia](https://data.gov.au/dataset/oil-and-gas-pipelines-of-australia)
* [GoM pipelines](http://www.landscope.org/louisiana/map_layers/energy/offshore_pipelines/24942/)

If you know any other relevant data sources, I would be interested to know about them! I hope you find the [Qwilka Subsea GIS](https://qwilka.github.io/GIS/) interesting, in time I am planning to develop it into a useful reference tool for subsea engineers.   
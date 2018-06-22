//  .. White background
var WhiteBG = L.tileLayer("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEX///+nxBvIAAAAH0lEQVQYGe3BAQ0AAADCIPunfg43YAAAAAAAAAAA5wIhAAAB9aK9BAAAAABJRU5ErkJggg==");

var OSMobj = {
    baseUrl: "http://ows.terrestris.de/osm/service",
    options: {
        layers: "TOPO-OSM-WMS",
        CRS: "EPSG:4326",
        format: 'image/png',
        noWrap: true,
        transparent: false,
        opacity: 0.7,
        attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
}
var OSM = L.tileLayer.wms(OSMobj.baseUrl, OSMobj.options)

var GEBCOobj = {
    baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv",
    options: {
        layers: "GEBCO_LATEST",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        noWrap: true,
        transparent: false,
        opacity: 0.7,
        attribution: '<a target="_blank" href="https://www.gebco.net/">GEBCO</a>'	
    }
}
var GEBCO = L.tileLayer.wms(GEBCOobj.baseUrl, GEBCOobj.options)
// layers: ["GEBCO_LATEST"],
// baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?request=getmap&service=wms&BBOX=-90,-180,90,180&crs=EPSG:4326&format=image/jpeg&layers=gebco_latest&width=900&height=600&version=1.3.0",
//baseUrl: "http://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?",

var GEBCOsigObj = {
    baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv",
    options: {
        layers: "GEBCO_LATEST_sid",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        noWrap: true,
        transparent: true,
        opacity: 0.6,
        attribution: '<a target="_blank" href="https://www.gebco.net/">GEBCO</a>'	
    }
}
var GEBCOsig = L.tileLayer.wms(GEBCOsigObj.baseUrl, GEBCOsigObj.options)
//baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?request=getmap&service=wms&BBOX=-90,-180,90,180&crs=EPSG:4326&format=image/jpeg&layers=gebco_latest_sid&width=900&height=600&version=1.3.0",
//  layers: ['dscAll', 'pplAll', 'fclFixed'],
var NPDobj = {
    baseUrl: "http://gis.npd.no/ogc/factmaps/2_0",
    options: {
        layers: "dscAll,pplAll,fclFixed",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="http://npdwms.npd.no/">NPD</a>'
    }
}
var NPD = L.tileLayer.wms(NPDobj.baseUrl, NPDobj.options)

// https://data.gov.ie/dataset/offshore-gas-pipeline
var IREobj = {
    baseUrl: "http://atlas.marine.ie/arcgis/services/EnergyResourcesInfrastructure/MapServer/WMSServer",
    options: {
        layers: '1,2,3',
        CRS: "EPSG:4326",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://data.gov.ie/dataset/offshore-gas-pipeline">IE-GovData</a> <a href="https://creativecommons.org/licenses/by/4.0/">(CC BY 4.0)</a>'
    }
}
var IRE = L.tileLayer.wms(IREobj.baseUrl, IREobj.options)

// https://marinescotland.atkinsgeospatial.com/nmpi/default.aspx?layers=515#
// http://marine.gov.scot/maps/1529
// http://marine.gov.scot/maps/515
// http://www.gov.scot/Topics/marine/seamanagement/nmpihome/wms-wfs
// http://msmap1.atkinsgeospatial.com/geoserver/nmpwfs/ows?token=d46ffd2a-e192-4e51-8a6a-b3292c20f1ee&service=wms&request=getCapabilities
// https://data.gov.uk/dataset/ac766f0e-c121-4876-853d-cd68aa6181e1/resource/2987869a-dc81-4f4d-8955-1983ae288603
var MarScoobj = {
    baseUrl: "http://msmap1.atkinsgeospatial.com/geoserver/nmpwfs/ows",
    options: {
        layers: 'utility_and_government_services_fishing_intensity_pipelines_all_gears',
        CRS: "EPSG:3857",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        token: "d46ffd2a-e192-4e51-8a6a-b3292c20f1ee",
        attribution: '<a target="_blank" href="http://marine.gov.scot/maps/1529">&copy; Crown Copyright (ScotGov)</a>'
    }
}
var MarSco = L.tileLayer.wms(MarScoobj.baseUrl, MarScoobj.options)
//            layers: 'utility_and_government_services_fishing_intensity_pipelines_all_gears',

// var UKOGobj = {
//     baseUrl: "https://gis.ukoilandgasdata.com/gis/services/CDA/UKOilAndGasData/MapServer/WMSServer",
//     options: {
//         layers: 'Pipelines',
//         CRS: "EPSG:4326",
//         format: 'image/png',
//         transparent: true,
//         noWrap: true,
//         opacity: 0.9,
//         attribution: '<a target="_blank" href="http://www.gov.scot/Topics/marine/seamanagement/nmpihome/wms-wfs">Marine Scotland MAPS NMPi</a>'
//     }
// }
// var UKOG = L.tileLayer.wms(UKOGobj.baseUrl, UKOGobj.options)

var DK = new L.LayerGroup; // empty layer https://stackoverflow.com/questions/28802535/add-empty-overlay-to-leaflet-map
DK = new L.GeoJSON.AJAX("./data/DK_Geus_pipelines_simplified.geojson" ,{
    dataType: 'json',
    local: true,
    attribution: '<a target="_blank" href="http://data.geus.dk/geusmap/ows/help/?lang=en">DK-Geus</a>',
    style: function(feature) {
        switch (feature.properties.content_name.toLowerCase()) {
            case 'gas': return {color: "#008b00"};
            case 'oil':  return {color: "#8b0000"};
            case 'multi-phase':  return {color: "#cdcd00"};
            default:  return {color: "#36648b", "weight": 1, "opacity": 1.0}; 
        }
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            click: function onGeojsonLayerClick(evt) {
                var contstr = "Denmark pipeline";
                contstr += '<br>name: <b>'+feature.properties.name+'</b>';
                contstr += '<br>service: '+feature.properties.content_name.toLowerCase();
                popup
                    .setLatLng(evt.latlng)
                    .setContent(contstr)
                    .openOn(map)
            }
        });
    },
}  );
// $.getJSON("./data/DK_Geus_pipelines_simplified.geojson" , function(geoj) {
//     DK = L.geoJSON(geoj, {
//         dataType: 'json',
//         local: true,
//         attribution: '<a target="_blank" href="http://data.geus.dk/geusmap/ows/help/?lang=en">DK-Geus</a>',
//         style: function(feature) {
//             switch (feature.properties.content_name.toLowerCase()) {
//                 case 'gas': return {color: "#008b00"};
//                 case 'oil':  return {color: "#8b0000"};
//                 case 'multi-phase':  return {color: "#cdcd00"};
//                 default:  return {color: "#36648b", "weight": 1, "opacity": 1.0}; 
//             }
//         },
//         onEachFeature: function (feature, layer) {
//             layer.on({
//                 click: function onGeojsonLayerClick(evt) {
//                     var contstr = "Denmark pipeline";
//                     contstr += '<br>name: <b>'+feature.properties.name+'</b>';
//                     contstr += '<br>service: '+feature.properties.content_name.toLowerCase();
//                     popup
//                         .setLatLng(evt.latlng)
//                         .setContent(contstr)
//                         .openOn(map)
//                 }
//             });
//         }
//     } );
//     //layerCon.addOverlay(DK, "Denmark pipelines (v)");
// });
// var DKgeojson = {
//     "type": "Point", 
//     "coordinates": [0, 0]
// }

// layers: 'MarineRegions:eez_boundaries',
var EEZobj = {
    baseUrl: "http://geo.vliz.be:80/geoserver/MarineRegions/wms",
    options: {
        layers: 'MarineRegions:eez_boundaries',
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="http://www.marineregions.org">FlandersMarineInst (CC-BY-NC-SA)</a>'
    }
}
var EEZ = L.tileLayer.wms(EEZobj.baseUrl, EEZobj.options)


var BOEMbathyobj = {
    baseUrl: "https://gis.boem.gov/arcgis/services/BOEM_BSEE/GOM_Deepwater_Bathymetry_and_Hillshade_Tiled/MapServer/WmsServer",
    options: {
        layers: "0",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        maxZoom: 14,
        noWrap: true,
        transparent: true,
        opacity: 0.7,
        attribution: '<a target="_blank" href="https://gis.boem.gov/">BOEM</a>'	
    }
}
var BOEMbathy = L.tileLayer.wms(BOEMbathyobj.baseUrl, BOEMbathyobj.options)

// var BOEMplobj = {
//     baseUrl: "https://gis.boem.gov/arcgis/services/BOEM_BSEE/POC_Layers/MapServer/WmsServer",
//     options: {
//         layers: ["6", "7"],
//         CRS: "EPSG:4326",
//         version: '1.3.0',
//         format: 'image/png',
//         maxZoom: 14,
//         noWrap: true,
//         transparent: false,
//         opacity: 0.7,
//         attribution: '<a target="_blank" href="https://gis.boem.gov/arcgis/rest/services/BOEM_BSEE/POC_Layers/MapServer">BOEM</a>'	
//     }
// }
// var BOEMpl = L.tileLayer.wms(BOEMplobj.baseUrl, BOEMplobj.options)
var GoMplobj = {
    baseUrl: "http://worldmap.harvard.edu/geoserver/geonode/gulf_of_mexico_pipelines_cpu/ows",
    options: {
        layers: "gulf_of_mexico_pipelines_cpu",
        CRS: "EPSG:4267",
        version: '1.3.0',
        format: 'image/png',
        maxZoom: 14,
        noWrap: true,
        transparent: true,
        opacity: 0.7,
        attribution: '<a target="_blank" href="https://worldmap.harvard.edu/data/geonode:gulf_of_mexico_pipelines_cpu">Harvard WorldMap Project</a>'	
    }
}
var GoMpl = L.tileLayer.wms(GoMplobj.baseUrl, GoMplobj.options)
//  .. White background
var WhiteBG = L.tileLayer("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEX///+nxBvIAAAAH0lEQVQYGe3BAQ0AAADCIPunfg43YAAAAAAAAAAA5wIhAAAB9aK9BAAAAABJRU5ErkJggg==");

var GEBCO = {
    title: "GEBCO",
    source: "WMS",
    type: "BASEMAP",
    ref: ["https://www.gebco.net/"],
    baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv",
    options: {
        layers: "GEBCO_LATEST",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="https://www.gebco.net/">GEBCO</a>'
    }
}
GEBCO.layer = L.tileLayer.wms(GEBCO.baseUrl, GEBCO.options);

var OSM = {
    title: "OpenStreetMap",
    source: "WMS",
    type: "BASEMAP",
    ref: [
        "https://wiki.openstreetmap.org/wiki/List_of_OSM-based_services",
        "http://ows.terrestris.de/"
    ],
    baseUrl: "http://ows.terrestris.de/osm/service",
    options: {
        layers: "TOPO-OSM-WMS",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
}
OSM.layer = L.tileLayer.wms(OSM.baseUrl, OSM.options);

// layers: "s2cloudless-2017_3857",  "blackmarble_3857"  "bluemarble_3857"
var EOX2017 = {
    title: "Sentinel-2 cloudless",
    source: "WMS",
    type: "BASEMAP",
    ref: [
        "https://s2maps.eu/",
        "https://gis.stackexchange.com/questions/253034/sentinel-2-imagery-as-a-webservice-in-a-leaflet-or-openlayers-map?rq=1"
    ],
    baseUrl: "https://tiles.maps.eox.at/?",
    options: {
        layers: "s2cloudless-2017_3857",
        CRS: "EPSG:4326",
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="https://s2maps.eu/">EOX (CC-BY-4.0)</a>'
    }
}
EOX2017.layer = L.tileLayer.wms(EOX2017.baseUrl, EOX2017.options);

var EOXBlue = {
    title: "Blue Marble",
    source: "WMS",
    type: "BASEMAP",
    ref: [
        "https://s2maps.eu/",
        "https://gis.stackexchange.com/questions/253034/sentinel-2-imagery-as-a-webservice-in-a-leaflet-or-openlayers-map?rq=1"
    ],
    baseUrl: "https://tiles.maps.eox.at/?",
    options: {
        layers: "bluemarble_3857",
        CRS: "EPSG:4326",
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="https://s2maps.eu/">EOX (CC-BY-4.0)</a>'
    }
}
EOXBlue.layer = L.tileLayer.wms(EOXBlue.baseUrl, EOXBlue.options);

var EOXBlack = {
    title: "Black Marble",
    source: "WMS",
    type: "BASEMAP",
    ref: [
        "https://s2maps.eu/",
        "https://gis.stackexchange.com/questions/253034/sentinel-2-imagery-as-a-webservice-in-a-leaflet-or-openlayers-map?rq=1"
    ],
    baseUrl: "https://tiles.maps.eox.at/?",
    options: {
        layers: "blackmarble_3857",
        CRS: "EPSG:4326",
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="https://s2maps.eu/">EOX (CC-BY-4.0)</a>'
    }
}
EOXBlack.layer = L.tileLayer.wms(EOXBlack.baseUrl, EOXBlack.options);


var BM = {
    title: "Blue Marble",
    source: "WMS",
    type: "BASEMAP",
    ref: [
        "https://s2maps.eu/",
        "https://gis.stackexchange.com/questions/253034/sentinel-2-imagery-as-a-webservice-in-a-leaflet-or-openlayers-map?rq=1"
    ],
    baseUrl: "https://svs.gsfc.nasa.gov/cgi-bin/wms",
    options: {
        layers: "2915_21223",
        CRS: "CRS:84",
        version: '1.3.0',
        format: 'image/png',
        transparent: false,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="https://s2maps.eu/">EOX (CC-BY-4.0)</a>'
    }
}
BM.layer = L.tileLayer.wms(BM.baseUrl, BM.options);


// https://ogc.fiskeridir.no/wms.ashx?service=WMS&request=GetCapabilities&version=1.3.0
var FiskDir2017K4 = {
    title: "2017 K4 Norske fiskefartøy",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/"],
    baseUrl: "https://ogc.fiskeridir.no/wms.ashx",
    options: {
        layers: "layer_585",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://www.fiskeridir.no/Kart/Om-kartdata/Om-nedlasting-av-geodata">Fiskeridirektoratet</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
FiskDir2017K4.layer = L.tileLayer.wms(FiskDir2017K4.baseUrl, FiskDir2017K4.options)
var FiskDir2017K3 = {
    title: "2017 K3 Norske fiskefartøy",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/"],
    baseUrl: "https://ogc.fiskeridir.no/wms.ashx",
    options: {
        layers: "layer_584",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://www.fiskeridir.no/Kart/Om-kartdata/Om-nedlasting-av-geodata">Fiskeridirektoratet</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
FiskDir2017K3.layer = L.tileLayer.wms(FiskDir2017K3.baseUrl, FiskDir2017K3.options)
var FiskDir2017K2 = {
    title: "2017 K2 Norske fiskefartøy",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/"],
    baseUrl: "https://ogc.fiskeridir.no/wms.ashx",
    options: {
        layers: "layer_583",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://www.fiskeridir.no/Kart/Om-kartdata/Om-nedlasting-av-geodata">Fiskeridirektoratet</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
FiskDir2017K2.layer = L.tileLayer.wms(FiskDir2017K2.baseUrl, FiskDir2017K2.options)
var FiskDir2017K1 = {
    title: "2017 K1 Norske fiskefartøy",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/"],
    baseUrl: "https://ogc.fiskeridir.no/wms.ashx",
    options: {
        layers: "layer_582",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://www.fiskeridir.no/Kart/Om-kartdata/Om-nedlasting-av-geodata">Fiskeridirektoratet</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
FiskDir2017K1.layer = L.tileLayer.wms(FiskDir2017K1.baseUrl, FiskDir2017K1.options)
var FiskDir2017U = {
    title: "2017 Utenlandske fiskefartøy",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/"],
    baseUrl: "https://ogc.fiskeridir.no/wms.ashx",
    options: {
        layers: "layer_581",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://www.fiskeridir.no/Kart/Om-kartdata/Om-nedlasting-av-geodata">Fiskeridirektoratet</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
FiskDir2017U.layer = L.tileLayer.wms(FiskDir2017U.baseUrl, FiskDir2017U.options)


// var NPDobj = {
//     baseUrl: "http://gis.npd.no/ogc/factmaps/2_0",
//     title: "Pipelines & infrastructure",
//     source: "WMS",
//     type: "OVERLAY",
//     ref: ["http://npdwms.npd.no/", "http://www.npd.no/en/Maps/Fact-maps/"],
//     options: {
//         layers: "dscAll,pplAll,fclFixed",
//         CRS: "EPSG:23032",
//         format: 'image/png',
//         transparent: true,
//         noWrap: true,
//         opacity: 0.9,
//         attribution: '<a target="_blank" href="http://www.npd.no/en/Maps/Fact-maps/">NPD</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
//     }
// }
// var NPD = L.tileLayer.wms(NPDobj.baseUrl, NPDobj.options)
var NPD = {
    title: "Pipelines and infrastructure",
    source: "WMS",
    type: "OVERLAY",
    ref: [
        "http://npdwms.npd.no/",
        "http://www.npd.no/en/Maps/Fact-maps/"
    ],
    baseUrl: "http://gis.npd.no/ogc/factmaps/2_0",
    options: {
        layers: "dscAll,pplAll,fclFixed",
        CRS: "EPSG:23032",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 1.0,
        attribution: '<a target="_blank" href="http://www.npd.no/en/Maps/Fact-maps/">NPD</a> <a target="_blank" href="https://data.norge.no/nlod/no">(NLOD)</a>'
    }
}
NPD.layer = L.tileLayer.wms(NPD.baseUrl, NPD.options);

// https://data.gov.ie/dataset/offshore-gas-pipeline
// var IREobj = {
//     baseUrl: "http://atlas.marine.ie/arcgis/services/EnergyResourcesInfrastructure/MapServer/WMSServer",
//     options: {
//         layers: '1,2,3',
//         CRS: "EPSG:4326",
//         format: 'image/png',
//         transparent: true,
//         noWrap: true,
//         opacity: 0.9,
//         attribution: '<a target="_blank" href="https://data.gov.ie/dataset/offshore-gas-pipeline">IE-GovData</a> <a href="https://creativecommons.org/licenses/by/4.0/">(CC BY 4.0)</a>'
//     }
// }
// var IRE = L.tileLayer.wms(IREobj.baseUrl, IREobj.options)
var IRE = {
    title: "Offshore pipelines and fields",
    source: "WMS",
    type: "OVERLAY",
    ref: [
        "https://data.gov.ie/dataset/offshore-gas-pipeline"
    ],
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
IRE.layer = L.tileLayer.wms(IRE.baseUrl, IRE.options);

// https://marinescotland.atkinsgeospatial.com/nmpi/default.aspx?layers=515#
// http://marine.gov.scot/maps/1529
// http://marine.gov.scot/maps/515
// http://www.gov.scot/Topics/marine/seamanagement/nmpihome/wms-wfs
// http://msmap1.atkinsgeospatial.com/geoserver/nmpwfs/ows?token=d46ffd2a-e192-4e51-8a6a-b3292c20f1ee&service=wms&request=getCapabilities
// https://data.gov.uk/dataset/ac766f0e-c121-4876-853d-cd68aa6181e1/resource/2987869a-dc81-4f4d-8955-1983ae288603
// var MarScoobj = {
//     baseUrl: "http://msmap1.atkinsgeospatial.com/geoserver/nmpwfs/ows",
//     options: {
//         layers: 'utility_and_government_services_fishing_intensity_pipelines_all_gears',
//         CRS: "EPSG:3857",
//         format: 'image/png',
//         transparent: true,
//         noWrap: true,
//         opacity: 0.9,
//         token: "d46ffd2a-e192-4e51-8a6a-b3292c20f1ee",
//         attribution: '<a target="_blank" href="http://marine.gov.scot/maps/1529">&copy; Crown Copyright (ScotGov)</a>'
//     }
// }
// var MarSco = L.tileLayer.wms(MarScoobj.baseUrl, MarScoobj.options)
var MarSCOfish = {
    title: "Fishing activity",
    source: "WMS",
    type: "OVERLAY",
    ref: [
    ],
    baseUrl: "http://msmap1.atkinsgeospatial.com/geoserver/nmpwfs/ows",
    options: {
        layers: 'utility_and_government_services_fishing_intensity_pipelines_all_gears',
        CRS: "EPSG:3857",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        token: "d46ffd2a-e192-4e51-8a6a-b3292c20f1ee",
        attribution: '<a target="_blank" href="http://marine.gov.scot/maps/616">&copy; Crown Copyright (ScotGov)</a>'
    }
}
MarSCOfish.layer = L.tileLayer.wms(MarSCOfish.baseUrl, MarSCOfish.options)
var MarSCOpl = {
    title: "Pipelines & fields",
    source: "WMS",
    type: "OVERLAY",
    ref: [
        "http://marine.gov.scot/node/14373",
        "http://marine.gov.scot/maps/616", 
        "http://marine.gov.scot/maps/615",
        "http://www.gov.scot/Topics/marine/seamanagement/nmpihome/layers",
        "http://msmap1.atkinsgeospatial.com/geoserver/ows/nmp?service=WMS&request=GetCapabilities&version=1.3.0",
        "https://data.gov.uk/dataset/ac766f0e-c121-4876-853d-cd68aa6181e1/resource/2987869a-dc81-4f4d-8955-1983ae288603"
    ],
    baseUrl: "http://msmap1.atkinsgeospatial.com/geoserver/ows/nmp",
    options: {
        layers: "nmp:NMPMAP8polygon,nmp:NMPMAP8line",
        CRS: "EPSG:3857",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        token: "d46ffd2a-e192-4e51-8a6a-b3292c20f1ee",
        attribution: '<a target="_blank" href="http://marine.gov.scot/maps/616">&copy; Crown Copyright (ScotGov)</a>'
    }
}
MarSCOpl.layer = L.tileLayer.wms(MarSCOpl.baseUrl, MarSCOpl.options)


var DKpl = {
    title: "Denmark pipelines (v)",
    source: "GEOJSON",
    type: "OVERLAY",
    ref: [],
    baseUrl: "./data/DK_Geus_pipelines_simplified.geojson",
    options: {
        attribution: '<a target="_blank" href="http://data.geus.dk/geusmap/ows/help/?lang=en">DK-Geus</a>'	
    }
}
DKpl.layer  = new L.GeoJSON.AJAX(DKpl.baseUrl ,{
    dataType: 'json',
    local: true,
    attribution: DKpl.options.attribution,
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


var GoMbathy = {
    title: "GoM deepwater bathymetric hillshade",
    source: "WMS",
    type: "OVERLAY",
    ref: [],
    baseUrl: "https://gis.boem.gov/arcgis/services/BOEM_BSEE/GOM_Deepwater_Bathymetry_and_Hillshade_Tiled/MapServer/WmsServer",
    options: {
        layers: "0",
        CRS: "EPSG:4326",
        format: 'image/png',
        maxZoom: 14,
        noWrap: true,
        transparent: true,
        opacity: 0.8,
        attribution: '<a target="_blank" href="https://gis.boem.gov/">BOEM</a>'	
    }
}
GoMbathy.layer = L.tileLayer.wms(GoMbathy.baseUrl, GoMbathy.options);

var GoMpl = {
    title: "OCS Oil & Gas Pipelines",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://gis.boem.gov/arcgis/services/BOEM_BSEE/MMC_Layers/MapServer/WMSServer?request=GetCapabilities&service=WMS"],
    baseUrl: "https://gis.boem.gov/arcgis/services/BOEM_BSEE/MMC_Layers/MapServer/WmsServer",
    options: {
        layers: "26",
        CRS: "EPSG:4326",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://gis.boem.gov/arcgis/rest/services/BOEM_BSEE/POC_Layers/MapServer">BOEM</a>'
    }
}
GoMpl.layer = L.tileLayer.wms(GoMpl.baseUrl, GoMpl.options);

var EEZ = {
    title: "Exclusive economic zone boundaries",
    source: "WMS",
    type: "OVERLAY",
    ref: [],
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
EEZ.layer = L.tileLayer.wms(EEZ.baseUrl, EEZ.options);

var GEBCOsid = {
    title: "GEBCO source identifier",
    source: "WMS",
    type: "OVERLAY",
    ref: ["https://www.gebco.net/"],
    baseUrl: "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv",
    options: {
        layers: "GEBCO_LATEST_sid",
        CRS: "EPSG:4326",
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.6,
        attribution: '<a target="_blank" href="https://www.gebco.net/">GEBCO</a>'
    }
}
GEBCOsid.layer = L.tileLayer.wms(GEBCOsid.baseUrl, GEBCOsid.options);

var AusInfra = {
    title: "National Oil and Gas Infrastructure",
    source: "WMS",
    type: "OVERLAY",
    ref: [
        "https://data.gov.au/dataset/d40adb23-4ca1-428c-8676-b1c3c247990e",
        "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer",
        "http://services.ga.gov.au/gis/services/Oil_Gas_Infrastructure/MapServer/WMSServer?request=GetCapabilities&service=WMS"
    ],
    baseUrl: "http://services.ga.gov.au/gis/services/Oil_Gas_Infrastructure/MapServer/WMSServer",
    options: {
        layers: '0,1,2',
        CRS: "EPSG:4283",
        format: 'image/png',
        transparent: true,
        noWrap: true,
        opacity: 0.9,
        attribution: '<a target="_blank" href="https://data.gov.au/dataset/d40adb23-4ca1-428c-8676-b1c3c247990e">Geoscience Australia</a>'
    }
}
AusInfra.layer = L.tileLayer.wms(AusInfra.baseUrl, AusInfra.options);


// allMapLayer is used by control leaflet-fullHash
var allMapLayers = {
    'GEBCO': GEBCO.layer,
    "OSM": OSM.layer,
    "EOXBlue": EOXBlue.layer,
    "EOXBlack": EOXBlack.layer,
    "EOX2017": EOX2017.layer,
    'NPD': NPD.layer,
    'IRE': IRE.layer,
    "GoMpl": GoMpl.layer,
    "GoMbathy": GoMbathy.layer,
    "MarSCOpl": MarSCOpl.layer,
    "AusInfra": AusInfra.layer,
    'EEZ': EEZ.layer
};

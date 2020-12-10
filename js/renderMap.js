//var mymap = L.map('mapid').setView([51.505, -0.09], 10);
// var map = L.map('mapid').fitWorld();
// L.tileLayer(
//     'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//     zoomControl: false,
//     zoom:10,
//     maxZoom: 18
// }).addTo(map);




var markIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [50, 64]
});
//var marker = L.marker([51.508, -0.111], { icon: markIcon }).addTo(map);



var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,';
var osmLayer = L.tileLayer(osmUrl, {attribution: osmAttribution});
var map = L.map('mapid');
osmLayer.addTo(map);
//var validatorsLayer = new OsmJs.Weather.LeafletLayer({lang: 'en'});
//map.addLayer(validatorsLayer);


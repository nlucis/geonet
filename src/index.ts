import * as PIXI from 'pixi.js';
import * as L from 'leaflet';
import * as data from './data/geomapData.json';

const geomap = L.map('geomap').setView([43.659752, -79.378161], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
const Stamen_Toner = L.tileLayer(data.tileURI, 
	{
		attribution: data.attribution,
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 18
});
Stamen_Toner.addTo(geomap);

// Adds a popup marker to the webmap for GGL address
L.circleMarker([43.659752, -79.378161]).addTo(geomap)
	.bindPopup(
		'MON 304<br>' + 
		'Monetary Times Building<br>' +
		'341 Victoria Street<br>' + 
		'Toronto, Ontario, Canada<br>' +
		'M5B 2K3<br><br>' + 
		'Tel: 416-9795000 Ext. 5192'
	)
	.openPopup();
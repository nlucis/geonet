import * as PIXI from 'pixi.js';
import * as LEAF from 'leaflet';

const geomap = LEAF.map('geomap').setView([43.659752, -79.378161], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
LEAF.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: 
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(geomap);

// Adds a popup marker to the webmap for GGL address
LEAF.circleMarker([43.659752, -79.378161]).addTo(geomap)
	.bindPopup(
		'MON 304<br>' + 
		'Monetary Times Building<br>' +
		'341 Victoria Street<br>' + 
		'Toronto, Ontario, Canada<br>' +
		'M5B 2K3<br><br>' + 
		'Tel: 416-9795000 Ext. 5192'
	)
	.openPopup();
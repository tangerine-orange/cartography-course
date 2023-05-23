import { getCoordinates, randomPoints } from '../module2/exercises';
// const shapefileToGeoJson = require('../module1/exercises').shapefileToGeoJson;
// const { getCoordinates, randomPoints } = require('../module2/exercises');
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import geojson from '../data.json';
import iconUrl from  "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const mapRoot = document.createElement('div');
mapRoot.id = "map";
const name = document.createElement('div');
name.id = "name";
const body = document.getElementsByTagName('body')[0];
body.prepend(mapRoot);
body.prepend(name);

const main = async () => {
    const points = randomPoints(10, geojson);
    const coordinates = points.map(getCoordinates)
    // Initialize map
    name.innerHTML = points[0].properties.NAME;
    console.log(points[0].properties.NAME);
    console.log(coordinates[0]);

    var map = L.map('map').setView(coordinates[0], 7);

    
    // Set map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    const icon = L.icon({
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    coordinates.forEach(c => {  
      L.marker(c, { icon }).addTo(map);
    })
}

main();
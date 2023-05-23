import { getCoordinates, randomPoints } from '../module2/exercises';
// const shapefileToGeoJson = require('../module1/exercises').shapefileToGeoJson;
// const { getCoordinates, randomPoints } = require('../module2/exercises');
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import geojson from '../data.json';

const mapRoot = document.createElement('div');
mapRoot.id = "map";
const name = document.createElement('div');
name.id = "name";
const body = document.getElementsByTagName('body')[0];
body.prepend(mapRoot);
body.prepend(name);

const main = async () => {
    // const geojson = await shapefileToGeoJson("data/ne_50m_admin_0_countries.zip");
    const points = randomPoints(1, geojson);
    const coordinates = points.map(getCoordinates)
    

    // test();
    
    
    // Initialize map
    name.innerHTML = points[0].properties.NAME;
    console.log(points[0].properties.NAME);
    console.log(coordinates[0]);
    var map = L.map('map').setView(coordinates[0], 7);
    
    // Set map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);
}

main();
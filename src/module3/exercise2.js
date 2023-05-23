import { getCoordinates, randomPoints } from '../module2/exercises';
import mapboxgl from "mapbox-gl";
import './style.css';
import geojson from '../data.json';

const mapRoot = document.createElement('div');
mapRoot.id = "map";
const name = document.createElement('div');
name.id = "name";
const body = document.getElementsByTagName('body')[0];
body.prepend(mapRoot);
body.prepend(name);

const main = () => {
    const points = randomPoints(1, geojson);
    const coordinates = points.map(getCoordinates).map((c) => [c[1], c[0]]);
    // Initialize map
    name.innerHTML = points[0].properties.NAME;
    console.log(points[0].properties.NAME);
    console.log(coordinates[0]);

    mapboxgl.accessToken = "pk.eyJ1IjoiampqcmVpc3NzIiwiYSI6ImNsaHM5aWlxODJ2eGEzbW1tcGkzYzJqZmoifQ.W62jLacpbTU-s4ScEV8qJQ";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates[0], // starting position
        zoom: 7 // starting zoom
    });
  }

  main();
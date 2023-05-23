import { getCoordinates, randomPoints } from '../module2/exercises';
import mapboxgl from "mapbox-gl";
import './style.css';
import geojson from '../data.json';
import { MAPBOX_KEY } from '../../environment';
import 'mapbox-gl/dist/mapbox-gl.css'; 

const mapRoot = document.createElement('div');
mapRoot.id = "map";
const name = document.createElement('div');
name.id = "name";
const body = document.getElementsByTagName('body')[0];
body.prepend(mapRoot);
body.prepend(name);

const main = () => {
    const points = randomPoints(10, geojson);
    const coordinates = points.map(getCoordinates).map((c) => [c[1], c[0]]);
    // Initialize map
    name.innerHTML = points[0].properties.NAME;
    console.log(points[0].properties.NAME);
    console.log(coordinates[0]);

    mapboxgl.accessToken = MAPBOX_KEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates[0], // starting position
        zoom: 7 // starting zoom
    });

    
    coordinates.forEach((c, i) => {  
        const marker = new mapboxgl.Marker({
            color: "red",
            draggable: true
        }).setLngLat(c)
            .setPopup(new mapboxgl.Popup().setHTML(points[i].properties.NAME)) // add popup
            .addTo(map);
        const markerEl = marker.getElement();
        console.log(marker);
        console.log(markerEl);
    })
  }

  main();
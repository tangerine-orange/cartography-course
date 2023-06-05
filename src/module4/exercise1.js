import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import geojson from '../data.json';
import { blueIcon } from '../module3/icons';
import { osmLayer, satelliteLayer } from './layers';

const mapRoot = document.createElement('div');
mapRoot.id = "map";
const name = document.createElement('div');
name.id = "name";
const body = document.getElementsByTagName('body')[0];
body.prepend(mapRoot);
body.prepend(name);

async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const main = async () => {
  const clientLocation = await getCurrentLocation();
  console.log(clientLocation);
  const map = L.map('map').setView([clientLocation.coords.latitude, clientLocation.coords.longitude], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
}

main();
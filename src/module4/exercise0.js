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

const getGdpPerCapita = feature => {
  return feature.properties.GDP_MD * (10 ** 6) / feature.properties.POP_EST;
}

function setPopup(feature, layer) {
  const popMillions = (feature.properties.POP_EST / (10 ** 6)).toFixed(2);
  const gdpBillions = feature.properties.GDP_MD / (10 ** 3).toFixed(0);
  const gdpPerCapita = getGdpPerCapita(feature).toFixed(2);
  layer.bindPopup(`${feature.properties.NAME}, GDP: $${gdpBillions}B, Population: ${popMillions} M, GDP per capita: $${gdpPerCapita}`);
}

function getColor(d) {
  return d < 1 ? '#800026' :
          d < 2  ? '#BD0026' :
          d < 5  ? '#E31A1C' :
          d < 10  ? '#FC4E2A' :
          d < 20   ? '#FD8D3C' :
          d < 50   ? '#FEB24C' :
          d < 100   ? '#FED976' :
                      '#FFEDA0';
}

function polygonGDPPerCapitaStyle(feature) {
  return {
      fillColor: getColor(getGdpPerCapita(feature)/1000),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

const baseLayers = {
  "OpenStreetMap": osmLayer,
  "Satellite": satelliteLayer
};

const main = async () => {
  const map = L.map('map').setView([31.505, 0], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  L.geoJSON(geojson, {
    style: polygonGDPPerCapitaStyle,
    onEachFeature: setPopup
  }).addTo(map);

  L.control.layers(baseLayers).addTo(map);
  console.log(geojson)
}

main();
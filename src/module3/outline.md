### Module 3: Introduction to Web Mapping Libraries
#### 3.1 Understanding Leaflet.js: Basics and Features
Leaflet.js is a widely-used open-source JavaScript library for building interactive maps on the web. Its key strengths are its simplicity, performance, and usability.
To start using Leaflet, first, you need to include the Leaflet CSS and JS files in your HTML file:
```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
</head>

```
To create a basic map with Leaflet, you need to initialize a map instance and set its center coordinates and zoom level:
```javascript
// Initialize map
var map = L.map('map').setView([51.505, -0.09], 13);

// Set map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

```
In this code, `L.map('map')` creates a new map on the `div` with id `map`, and `setView([51.505, -0.09], 13)` sets the initial geographic center of the map and the zoom level.
#### 3.2 Understanding Mapbox GL JS: Basics and Features
Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles. It is part of the Mapbox ecosystem but can be used independently with other data sources.
To use Mapbox GL JS, you need to include the Mapbox GL JS CSS and JS files in your HTML file:
```html
<head>
  <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
  <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
</head>

```
To create a basic map with Mapbox GL JS, you need to initialize a map instance:
```javascript
// Your Mapbox access token
mapboxgl.accessToken = 'your_access_token_here';

// Initialize map
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

```
In this code, `new mapboxgl.Map` creates a new map on the `div` with id `map`.
#### 3.3 Comparisons and Use Cases
Both Leaflet and Mapbox GL JS are powerful libraries that can be used for creating web maps. The choice between the two often depends on your specific needs:

* **Leaflet**: Lightweight and easy to use. It provides a lot of features out-of-the-box and is also highly extensible through plugins. It's a great choice if you want simplicity, performance, and broad compatibility (including older browsers and devices without WebGL).

* **Mapbox GL JS**: More powerful and flexible, but also more complex. It uses WebGL for high-performance rendering, allowing for smooth zooming, map rotation, and more. It's a good choice if you need advanced features like vector tiles, 3D buildings, or client-side data visualization.
### Exercises
1. **Create a Map with Leaflet**: Using the Leaflet.js library, create a simple map that centers on a location of your choice. Use the provided documentation to understand how to initialize the map and set the view to your chosen location. Be sure to add tile layers to display the map.
```javascript
// Example structure
var map = L.map('map').setView([51.505, -0.09], 13);

```
1. **Create a Map with Mapbox**: Repeat the same exercise as above, but this time use Mapbox GL JS. Similar to the Leaflet exercise, you will need to initialize a new map object and set the view to your chosen location. You will also need to provide your Mapbox Access Token.
```javascript
// Example structure
mapboxgl.accessToken = 'your access token here';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
});

```
1. **Adding Markers**: Extend the maps you created in exercises 1 and 2 by adding a marker at a location of your choice. You could use the location of a landmark, your home, or any other location that interests you.
For Leaflet:
```javascript
// Example structure
L.marker([51.5, -0.09]).addTo(map);

```
For Mapbox:
```javascript
// Example structure
new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);

```
Note that if you have installed mapbox-gl using npm, you will need to import the mapbox stylesheet:
```
import 'mapbox-gl/dist/mapbox-gl.css'; 
```
1. **Comparing Libraries**: Compare your experiences using Leaflet.js and Mapbox GL JS. What were the main differences? Which one would you prefer for what types of projects? This is more of a reflective exercise, so there's no code example for this. Consider things like the ease of use, functionality, customization options, and performance.
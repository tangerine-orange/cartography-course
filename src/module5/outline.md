## Module 5: Advanced Mapping with Mapbox GL JS

### Setting up a Basic Map

Mapbox GL JS is a powerful library that allows you to create interactive, customizable maps on the web. It uses WebGL to render maps from vector tiles and Mapbox styles, which means it's capable of rendering large datasets at a high performance.

First, you'll need to setup a Mapbox account and get an access token. The token is used to associate your code with your account and manage any usage charges.

To create a new map, we will first need to import the Mapbox GL JS package at the top of our JavaScript file.

```javascript
import mapboxgl from 'mapbox-gl';
```

Then, you can create a new map by creating a new instance of the `mapboxgl.Map` class:

```javascript
mapboxgl.accessToken = 'your_access_token';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
```

### Adding GeoJSON and Vector Tile Sources

Mapbox GL JS allows you to add data to your map using GeoJSON, which is a format for encoding geographic data structures. You can add a new GeoJSON source using the `map.addSource` function:

```javascript
map.on('load', function () {
    map.addSource('source_id', {
        'type': 'geojson',
        'data': 'url_to_your_geojson_data'
    });
});
```

To render this source on the map, you will need to add a layer using `map.addLayer`:

```javascript
map.addLayer({
    'id': 'layer_id',
    'type': 'line',
    'source': 'source_id',
    'layout': {},
    'paint': {
        'line-color': '#888',
        'line-width': 8
    }
});
```

### Implementing Navigation Controls and Interactivity

Mapbox GL JS provides a number of built-in controls that you can add to your map, including navigation controls for zooming and rotating the map:

```javascript
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
```

Mapbox GL JS also provides a number of events that you can listen for. For example, you can listen for a click event on a feature in a specified layer:

```javascript
map.on('click', 'layer_id', function (e) {
    console.log('You clicked on a feature in the layer_id layer.');
});
```

### Styling Maps with [Mapbox Studio](https://studio.mapbox.com/)

Mapbox Studio is a web-based tool for creating custom map styles. With Studio, you can customize the color, shape, and size of map features, add custom fonts and icons, and control the zoom level at which features appear.

Once you've created a style in Mapbox Studio, you can add it to your Mapbox GL JS map by specifying the style's URL when you create a new map:

```javascript
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/your_username/your_style_id', // your custom style URL
    center: [-74.5, 40],
    zoom: 9
});
```

### Adding 3D Buildings and Terrain

Mapbox GL JS also supports 3D buildings and terrain. You can add a 3D buildings layer to your map with the following code:

```javascript
map.on(`load`, function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;
     
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }
     
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': ['interpolate', ['linear'], ['get', 'height'], 0, 0, 1, 1],
            'fill-extrusion-base': ['interpolate', ['linear'], ['get', 'min_height'], 0, 0, 1, 1],
            'fill-extrusion-opacity': 0.6
        }
    }, labelLayerId);
});
```

For adding terrain, Mapbox provides a global digital elevation model (DEM) sourced from NASA's Shuttle Radar Topography Mission (SRTM). Here's an example of how to create a map with terrain:

```javascript
mapboxgl.accessToken = 'your_access_token';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-121.7475, 46.852],
    zoom: 8,
    pitch: 50,
    bearing: -30
});

map.on('load', function() {
    map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
     
    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });
});
```

### Incorporating Satellite Imagery

Mapbox GL JS allows you to add satellite imagery to your maps using the Mapbox Satellite style:

```javascript
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-74.5, 40],
    zoom: 9
});
```

**Exercises:**

1. **Basic Map**: Set up a basic Mapbox GL JS map in a new HTML file. Add navigation controls to your map.

2. **GeoJSON Source**: Add a GeoJSON source to your map. The source should be a file that you host on your own server. Add a layer that renders this source on the map.

3. **Mapbox Studio**: Create a new style in Mapbox Studio. Add this style to your map.

4. **3D Buildings**: Add a 3D buildings layer to your map.

5. **Satellite Imagery**: Add a satellite

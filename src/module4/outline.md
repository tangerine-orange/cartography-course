Sure, let's dive into Module 4.

### Module 4: Creating Interactive Maps with Leaflet.js

#### Setting up a Basic Map

First, we'll start by setting up a basic map using Leaflet.js. 

Leaflet.js is a powerful, open-source library used to create interactive maps on web pages. To get started, you'll need to include the Leaflet.js CSS and JavaScript files in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Leaflet Basic Map</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
    <div id="mapid" style="height: 600px;"></div>

    <script>
        var map = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    </script>
</body>
</html>
```

(**TODO:** Add code blocks for bundled JS formatting)

In this script, we first create a `div` element with an id of `mapid`. Then, we initialize our map using `L.map('mapid')` and set the initial geographic center of the map view using `setView([latitude, longitude], zoomLevel)`. 

The `L.tileLayer(...)` method is used to load and display tile layers on the map. Here we are using the OpenStreetMap tile server, and we add the tile layer to the map with `.addTo(map)`.

#### Adding GeoJSON data to the Map

To add GeoJSON data to the map, you can use the `L.geoJSON()` method in Leaflet.js. You can use this method to add a GeoJSON object to the map, or you can use it to load a GeoJSON file from a URL. Here's an example:

```javascript
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Location",
        "popupContent": "This is where I live!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-0.09, 51.505]
    }
};

L.geoJSON(geojsonFeature).addTo(map);
```

This script defines a GeoJSON feature and adds it to the map. When you load the page in a browser, you should see a point feature at the coordinates specified in the GeoJSON data.

#### Implementing Map Controls and Interactivity (Continued)

```javascript
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);
```

In this example, `onEachFeature` function is called on each feature in your GeoJSON layer. If the feature has a `popupContent` property, we bind a popup to the layer with that content.

#### Styling and Customizing Maps

Leaflet.js provides several options to style your map features. Here's an example of how to style a GeoJSON layer:

```javascript
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJSON(geojsonFeature, {
    style: style
}).addTo(map);
```

In this example, we define a `style` function that sets the style of each feature based on its properties. Note that this particular style will not change our place marker, but it will have an effect on any polygon features on your map (**TODO:** Add polygons to map)

#### Adding Layers and Layer Controls

Leaflet.js allows you to work with different layers simultaneously and provides a built-in control for switching between these layers. Here's an example:

```javascript
// Define base layers
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var satelliteLayer = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${YOUR_ACCESS_TOKEN}`, {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
});

// Define overlays
// Please replace 'cities.geojson' and 'roads.geojson' with paths to your actual GeoJSON files
// If you don't have GeoJSON available, you can leave the overlays out and only add the baseLayers.
// Also note that calling L.geoJSON.ajax may require the leaflet-ajax plugin, but that you could
// also fetch the geoJSON some other way and then add it to your map with L.geoJSON
var cityLayer = L.geoJSON.ajax('cities.geojson'); 
var roadLayer = L.geoJSON.ajax('roads.geojson');

var baseLayers = {
    "OpenStreetMap": osmLayer,
    "Satellite": satelliteLayer
};

var overlays = {
    "Cities": cityLayer,
    "Roads": roadLayer
};

// Create a map instance
var map = L.map('map', {
    layers: [osmLayer, cityLayer, roadLayer]  // Add default layers to the map
}).setView([51.505, -0.09], 13);

// Add controls
L.control.layers(baseLayers, overlays).addTo(map);
```

In this example, `baseLayers` contains the base layers for the map (background), and `overlays` contains the overlay layers that can be added or removed from the base layer. The `L.control.layers()` method adds a control to the map that lets you switch between these layers.

### Exercises:

1. **Creating a Basic Map**: Create a basic map view centered on your current location. You can use the `navigator.geolocation` API to get the user's current location.

2. **Adding GeoJSON Data**: Download a GeoJSON file of your choice and add it to your map. Try adding different types of features like points, lines, and polygons.

3. **Implementing Map Controls and Interactivity**: Add an `onEachFeature` function to your GeoJSON layer that binds a popup to each feature. The popup should display some feature properties.

4. **Styling Features**: Add a `style` function to your GeoJSON layer that styles features differently based on their properties.

5. **Adding Layers and Layer Controls**: Add a new tile layer (for example, a satellite layer from Mapbox) to your map. Then, add a layer control that allows you to switch between the original layer and the new layer.
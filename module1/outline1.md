### Module 1: Introduction to Geospatial Data
#### 1.1 Understanding Geospatial Data: Coordinates, Projections, and Transformations
Geospatial data refers to information about a physical object that can be represented by numerical values in a geographic coordinate system. In the context of maps, this often refers to latitudes, longitudes, and sometimes elevations.

* **Coordinates**: Every location on earth can be described by its latitude and longitude coordinates. Latitude lines run east-west and tell you how far north or south you are from the Equator. Longitude lines run north-south from pole to pole and tell you how far east or west you are from the Prime Meridian.

```javascript
// Example of a coordinate in [longitude, latitude] format
let coord = [-122.4194, 37.7749]; // San Francisco

```

* **Projections**: The Earth is a sphere, and maps are flat. To make a map, we must project the surface of the Earth onto a plane. There are many different ways to do this, and each method (or projection) has different strengths and weaknesses. Some preserve area, some preserve shape, and some preserve direction. Understanding these trade-offs is essential when making maps.

* **Transformations**: Geographic transformations are used to convert coordinates between different geographic coordinate systems. For example, you might need to convert GPS coordinates (which are on a spherical coordinate system) to a flat map projection for display.
#### 1.2 Introduction to GeoJSON and TopoJSON

* **GeoJSON**: GeoJSON is a format for encoding geographic data structures into JSON. It encodes geographic features in JSON format, where each feature has a geometry representing points, lines, polygons, etc., and properties, which is a JSON object containing additional information.```javascript
// Example of a GeoJSON feature
let geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "San Francisco"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-122.4194, 37.7749]
  }
};

```

* **TopoJSON**: TopoJSON is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called arcs. This technique is efficient in terms of file size and is also required for some advanced cartographic operations.#### 1.3 Sourcing Geospatial Data: Public Datasets
There are numerous sources of public geospatial data:

* [USGS](https://www.usgs.gov/): The U.S. Geological Survey provides geospatial data for the United States. This includes topographic data, land use, landmarks, and much more.

* [Natural Earth Data](https://www.naturalearthdata.com/): Natural Earth is a public domain map dataset available at multiple scales and includes both cultural and physical features.

* [OpenStreetMap](https://www.openstreetmap.org/): OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world. The data from OSM can be downloaded and used under its open license.

#### Exercises
1. **Coordinates**: Write a JavaScript function that takes a place name as input and returns a coordinate array [longitude, latitude]. You can use any geocoding API for this.
```javascript
// Example function structure
async function getCoordinates(placeName) {
    // Your geocoding API call goes here
    // Return the coordinates as [longitude, latitude]
}

```
1. **GeoJSON**: Write a JavaScript function that takes a coordinate array and a place name as input and returns a GeoJSON Feature object representing a point at that location.
```javascript
// Example function structure
function createGeoJSONFeature(coordinates, placeName) {
    return {
        "type": "Feature",
        "properties": {
            "name": placeName
        },
        "geometry": {
            "type": "Point",
            "coordinates": coordinates
        }
    };
}

```
1. **Sourcing Data**: Choose a dataset from one of the public data sources (USGS, Natural Earth Data, OpenStreetMap), download it and inspect its structure. Try to extract meaningful information from it such as the number of features, the type of features (points, lines, polygons), etc.
```javascript
// Example function structure
function inspectDataset(dataset) {
    // Load the dataset
    // Extract and print the number of features
    // Extract and print the types of features
}

```
Please note, the examples given in these exercises are function structures, you will need to fill in the actual implementation depending on the APIs or libraries you are using. Also, the dataset inspection in Exercise 3 will be more of a manual task rather than a script.


const shp = require("shpjs");
const fs = require('fs').promises;

/**
 * Coordinates: Write a JavaScript function that takes a place name as input
 * and returns a coordinate array [longitude, latitude]. You can use any
 * geocoding API for this.
 */
async function getCoordinates(placeName) {
    const apiKey = "pk.eyJ1IjoiampqcmVpc3NzIiwiYSI6ImNsaHM5aWlxODJ2eGEzbW1tcGkzYzJqZmoifQ.W62jLacpbTU-s4ScEV8qJQ";
    const url = (placeName) => "https://api.mapbox.com/geocoding/v5/mapbox.places/" + placeName + ".json?access_token=" + apiKey;
    // Your geocoding API call goes here
    // Return the coordinates as [longitude, latitude]

    const response = await fetch(url(placeName));
    const data = await response.json();
    const coordinates = data.features[0].center;
    return coordinates;
}


/**
 * GeoJSON: Write a JavaScript function that takes a coordinate array and a place
 * name as input and returns a GeoJSON Feature object representing a point at that location.
 */
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

/**
 * Sourcing Data: Choose a dataset from one of the public data sources (USGS, Natural Earth Data,
 * OpenStreetMap), download it and inspect its structure. Try to extract meaningful information
 * from it such as the number of features, the type of features (points, lines, polygons), etc.
 */

async function shapefileToGeoJson(path) {
    const buffer = await fs.readFile(path);
    // Load the dataset
    const geoJson = await shp(buffer);
    return geoJson;
}

// This function assumes that path is a path to a zipped shapefile stored locally
async function inspectDataset(path) {
    const geoJson = await shapefileToGeoJson(path);
    // Inspect the dataset
    console.log(geoJson.features.length);
    // Get the types of features -- mostly polygons and multipolygons
    const types = geoJson.features.map(feature => feature.geometry.type);
    console.log(types);
}

const main = async () => {
    const coordinates = await getCoordinates("Durham, NC");
    console.log(coordinates);

    const geoJSON = createGeoJSONFeature(coordinates, "Durham, NC");
    console.log(geoJSON);

    await inspectDataset('data/ne_50m_admin_0_countries.zip');
};

module.exports = {
    shapefileToGeoJson,
    createGeoJSONFeature,
    getCoordinates
}
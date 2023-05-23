// const shp = require("shpjs");
// const fs = require('fs').promises;
import shp from 'shpjs';
import fs from 'fs/promises';
import { MAPBOX_KEY } from '../../environment';

/**
 * Coordinates: Write a JavaScript function that takes a place name as input
 * and returns a coordinate array [longitude, latitude]. You can use any
 * geocoding API for this.
 */
async function getCoordinates(placeName) {
    const apiKey = MAPBOX_KEY
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
    fs.writeFile('data.json', JSON.stringify(geoJson));
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

export { getCoordinates, createGeoJSONFeature, inspectDataset, shapefileToGeoJson };
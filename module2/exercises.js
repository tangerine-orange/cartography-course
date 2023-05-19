const { shapefileToGeoJson } = require('../module1/exercises');
const turf = require('@turf/turf');

/**
 * Data Cleaning: Write a JavaScript function that takes a GeoJSON object as
 * input, checks for missing or null property values, and fills them in with
 * default values. You can use the example provided as a starting point, but
 * try to make your function more general so it can handle any property, not just the 'name'.
 */
function cleanGeoJson(geojson) {
    // Your code goes here
    const cleanedGeojson = geojson;
    cleanedGeojson.features.forEach(feature => {
        for (const property in feature.properties) {
            if (!feature.properties[property]) {
                feature.properties[property] = "Unknown";
            }
        }
    });
    return cleanedGeojson;
}

/**
 * Data Transformation: Using Turf.js, write a JavaScript function that takes
 * two GeoJSON points and returns the midpoint between them.
 */
function getMidpoint(point1, point2) {
    // just gonna use the imported function, see main
}

/**
 * Geospatial Libraries: Explore the Turf.js documentation and find a function that
 * you find interesting. Write a JavaScript function that uses this Turf.js function
 * to perform a geospatial operation.
 */
function performOperation(feature1, feature2) {
    //code here
}

const main = async () => {
    const geojson = await shapefileToGeoJson("data/ne_50m_admin_0_countries.zip");
    const cleanedGeojson = cleanGeoJson(geojson);
    // console.log(cleanedGeojson);

    const points = [];
    for (let i = 0; i < 10; i++) {
        const point = cleanedGeojson.features[Math.floor(Math.random() * cleanedGeojson.features.length)];
        points.push(point);
    }
    const names = points.map(point => point.properties.NAME);
    const coordinates = points.map(point => [point.properties.LABEL_X, point.properties.LABEL_Y]);
    
    const m = turf.midpoint(coordinates[0], coordinates[1]);
    console.log({
        point1: {
            name: points[0].properties.NAME,
            coordinates: coordinates[0]
        },
        point2: {
            name: points[1].properties.NAME,
            coordinates: coordinates[1]
        },
        midpoint: {
            name: "Midpoint",
            coordinates: m.geometry.coordinates
        }
    });

    const c = turf.center(turf.points(coordinates));
    console.log({
        countries: names,
        center: c.geometry.coordinates
    })

}

main();
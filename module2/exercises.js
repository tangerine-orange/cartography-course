const { shapefileToGeoJson } = require('../module1/exercises');

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

const main = async () => {
    const geojson = await shapefileToGeoJson("data/ne_50m_admin_0_countries.zip");
    const cleanedGeojson = cleanGeoJson(geojson);
    console.log(cleanedGeojson);
}

main();
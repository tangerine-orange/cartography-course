import {getCoordinates, createGeoJSONFeature, inspectDataset} from './exercises.js';

const main = async () => {
    const coordinates = await getCoordinates("Durham, NC");
    console.log(coordinates);

    const geoJSON = createGeoJSONFeature(coordinates, "Durham, NC");
    console.log(geoJSON);

    await inspectDataset('src/data/ne_50m_admin_0_countries.zip');
};

main();
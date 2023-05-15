### Module 1: Introduction to Geospatial Data

#### 1.1 Understanding Geospatial Data: Coordinates, Projections, and Transformations
Geospatial data refers to information about a physical object that can be represented by numerical values in a geographic coordinate system. In the context of maps, this often refers to latitudes, longitudes, and sometimes elevations.

- **Coordinates**: Every location on earth can be described by its latitude and longitude coordinates. Latitude lines run east-west and tell you how far north or south you are from the Equator. Longitude lines run north-south from pole to pole and tell you how far east or west you are from the Prime Meridian.
  
- **Projections**: The Earth is a sphere, and maps are flat. To make a map, we must project the surface of the Earth onto a plane. There are many different ways to do this, and each method (or projection) has different strengths and weaknesses. Some preserve area, some preserve shape, and some preserve direction. Understanding these trade-offs is essential when making maps.

- **Transformations**: Geographic transformations are used to convert coordinates between different geographic coordinate systems. For example, you might need to convert GPS coordinates (which are on a spherical coordinate system) to a flat map projection for display.

#### 1.2 Introduction to GeoJSON and TopoJSON
- **GeoJSON**: GeoJSON is a format for encoding geographic data structures into JSON. It encodes geographic features in JSON format, where each feature has a geometry representing points, lines, polygons, etc., and properties, which is a JSON object containing additional information.

- **TopoJSON**: TopoJSON is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called arcs. This technique is efficient in terms of file size and is also required for some advanced cartographic operations.

#### 1.3 Sourcing Geospatial Data: Public Datasets
There are numerous sources of public geospatial data:

- [USGS](https://www.usgs.gov/): The U.S. Geological Survey provides geospatial data for the United States. This includes topographic data, land use, landmarks, and much more.

- [Natural Earth Data](https://www.naturalearthdata.com/): Natural Earth is a public domain map dataset available at multiple scales and includes both cultural and physical features.

- [OpenStreetMap](https://www.openstreetmap.org/): OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world. The data from OSM can be downloaded and used under its open license.

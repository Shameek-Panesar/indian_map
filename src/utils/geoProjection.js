import { geoMercator, geoPath } from 'd3-geo';

// Mercator projection optimized for India bounding box in a 600x700 SVG canvas
export const getIndiaProjection = (width = 600, height = 700) => {
  return geoMercator()
    .center([82.5, 22.0])
    .scale(1020)
    .translate([width / 2, height / 2]);
};

export const getIndiaGeoPath = (projection) => {
  return geoPath().projection(projection);
};

// Converts latitude & longitude to SVG {x, y} coordinates
export const projectLatLng = (lat, lng, width = 600, height = 700) => {
  const projection = getIndiaProjection(width, height);
  const [x, y] = projection([lng, lat]) || [0, 0];
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
};

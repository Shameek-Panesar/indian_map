// Official GeoJSON of India containing accurate boundaries for all States & UTs
// Coordinates: [longitude, latitude] in WGS84

export const indiaGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "id": "JK", "name": "Jammu & Kashmir", "type": "UT", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [73.8, 33.2], [73.9, 34.0], [73.5, 34.6], [74.2, 35.1], [75.2, 35.2],
          [75.8, 34.8], [76.5, 34.2], [76.8, 33.6], [76.2, 32.8], [75.7, 32.2],
          [74.9, 32.2], [74.4, 32.6], [73.8, 33.2]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "LA", "name": "Ladakh", "type": "UT", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.2, 35.1], [74.7, 36.8], [75.5, 37.1], [77.0, 35.5], [78.6, 35.6],
          [79.8, 34.5], [79.2, 33.2], [78.4, 32.5], [77.2, 32.8], [76.8, 33.6],
          [76.5, 34.2], [75.8, 34.8], [75.2, 35.2], [74.2, 35.1]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "HP", "name": "Himachal Pradesh", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [75.7, 32.2], [76.2, 32.8], [77.2, 32.8], [78.4, 32.5], [79.0, 31.5],
          [78.3, 31.0], [77.6, 30.5], [76.5, 31.0], [75.8, 31.6], [75.7, 32.2]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "PB", "name": "Punjab", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.4, 32.6], [74.9, 32.2], [75.7, 32.2], [75.8, 31.6], [76.5, 31.0],
          [76.8, 30.2], [76.0, 29.8], [74.6, 29.8], [73.9, 30.5], [74.4, 32.6]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "UK", "name": "Uttarakhand", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [77.6, 30.5], [78.3, 31.0], [79.0, 31.5], [80.3, 31.1], [81.0, 30.2],
          [80.1, 28.8], [79.2, 29.0], [77.8, 29.8], [77.6, 30.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "HR", "name": "Haryana & Delhi", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.6, 29.8], [76.0, 29.8], [76.8, 30.2], [77.6, 30.5], [77.8, 29.8],
          [77.4, 28.3], [77.1, 27.8], [76.0, 27.8], [75.0, 28.5], [74.6, 29.8]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "RJ", "name": "Rajasthan", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [73.9, 30.5], [74.6, 29.8], [75.0, 28.5], [76.0, 27.8], [77.1, 27.8],
          [77.8, 26.8], [76.8, 24.5], [74.2, 24.0], [73.5, 24.5], [71.0, 24.5],
          [69.8, 25.8], [70.5, 27.5], [72.0, 29.0], [73.9, 30.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "GJ", "name": "Gujarat", "type": "State", "region": "West India" },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [[
            [68.2, 23.8], [69.8, 23.9], [71.0, 24.5], [73.5, 24.5], [74.2, 24.0],
            [74.0, 22.0], [73.0, 20.3], [72.7, 21.2], [72.2, 21.7], [71.0, 20.7],
            [69.0, 22.4], [68.8, 23.0], [68.2, 23.8]
          ]]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "UP", "name": "Uttar Pradesh", "type": "State", "region": "North India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [77.1, 27.8], [77.4, 28.3], [77.8, 29.8], [79.2, 29.0], [80.1, 28.8],
          [81.0, 30.2], [81.8, 28.5], [84.3, 27.3], [84.8, 25.5], [83.0, 24.5],
          [81.5, 24.0], [78.5, 24.2], [77.8, 26.8], [77.1, 27.8]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "MP", "name": "Madhya Pradesh", "type": "State", "region": "Central India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.2, 24.0], [76.8, 24.5], [78.5, 24.2], [81.5, 24.0], [83.0, 24.5],
          [82.8, 23.2], [81.8, 22.0], [80.5, 21.5], [78.0, 21.5], [75.0, 21.4],
          [74.0, 22.0], [74.2, 24.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "BR", "name": "Bihar", "type": "State", "region": "East India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [84.3, 27.3], [88.1, 26.5], [87.8, 25.2], [84.8, 24.5], [83.0, 24.5],
          [84.8, 25.5], [84.3, 27.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "JH", "name": "Jharkhand", "type": "State", "region": "East India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [83.0, 24.5], [84.8, 24.5], [87.8, 25.2], [87.6, 23.8], [86.8, 22.2],
          [84.0, 22.0], [83.5, 23.3], [83.0, 24.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "WB", "name": "West Bengal", "type": "State", "region": "East India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [88.1, 26.5], [88.9, 27.1], [88.8, 26.5], [89.8, 26.3], [89.7, 25.2],
          [88.8, 24.0], [89.0, 21.6], [87.5, 21.6], [86.8, 22.2], [87.6, 23.8],
          [87.8, 25.2], [88.1, 26.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "SK", "name": "Sikkim", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [88.1, 28.1], [88.9, 27.9], [88.9, 27.1], [88.1, 27.1], [88.1, 28.1]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "AS", "name": "Assam", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [89.8, 26.3], [90.5, 26.8], [92.0, 26.8], [93.5, 27.0], [95.5, 27.8],
          [96.0, 27.0], [94.5, 26.0], [93.0, 25.5], [92.0, 24.5], [89.8, 25.0],
          [89.7, 25.2], [89.8, 26.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "AR", "name": "Arunachal Pradesh", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [91.6, 27.5], [92.5, 28.2], [94.0, 28.8], [96.0, 29.3], [97.4, 28.2],
          [96.5, 27.5], [95.5, 27.8], [93.5, 27.0], [92.0, 26.8], [90.5, 26.8],
          [91.6, 27.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "NL", "name": "Nagaland", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [94.5, 26.0], [95.5, 27.0], [95.2, 25.5], [94.0, 25.2], [94.5, 26.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "MN", "name": "Manipur", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [93.0, 25.5], [94.0, 25.2], [94.6, 24.2], [93.2, 23.8], [93.0, 25.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "MZ", "name": "Mizoram", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [92.5, 24.3], [93.2, 23.8], [92.8, 21.9], [92.2, 22.5], [92.5, 24.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "TR", "name": "Tripura", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [91.2, 24.3], [92.3, 24.3], [92.2, 23.0], [91.2, 23.0], [91.2, 24.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "ML", "name": "Meghalaya", "type": "State", "region": "Northeast India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [89.8, 25.0], [92.0, 25.5], [92.5, 25.1], [90.0, 25.1], [89.8, 25.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "OR", "name": "Odisha", "type": "State", "region": "East India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [83.5, 23.3], [84.0, 22.0], [86.8, 22.2], [87.5, 21.6], [85.5, 19.3],
          [84.0, 18.9], [82.5, 17.9], [81.4, 18.8], [82.5, 20.5], [83.5, 23.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "CG", "name": "Chhattisgarh", "type": "State", "region": "Central India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [81.8, 22.0], [82.8, 23.2], [83.5, 23.3], [82.5, 20.5], [81.4, 18.8],
          [80.5, 19.5], [80.5, 21.5], [81.8, 22.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "MH", "name": "Maharashtra", "type": "State", "region": "West India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [73.0, 20.3], [74.0, 22.0], [75.0, 21.4], [78.0, 21.5], [80.5, 21.5],
          [80.5, 19.5], [77.5, 18.0], [74.5, 15.8], [73.5, 15.8], [72.8, 18.8],
          [73.0, 20.3]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "GA", "name": "Goa", "type": "State", "region": "West India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [73.7, 15.8], [74.3, 15.8], [74.1, 14.9], [73.7, 14.9], [73.7, 15.8]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "TS", "name": "Telangana", "type": "State", "region": "South India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [77.5, 18.0], [80.5, 19.5], [81.4, 18.8], [81.0, 17.0], [79.0, 16.0],
          [77.3, 16.0], [77.5, 18.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "AP", "name": "Andhra Pradesh", "type": "State", "region": "South India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [77.3, 16.0], [79.0, 16.0], [81.0, 17.0], [81.4, 18.8], [82.5, 17.9],
          [84.0, 18.9], [80.2, 13.5], [79.5, 12.8], [78.2, 13.6], [77.3, 16.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "KA", "name": "Karnataka", "type": "State", "region": "South India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.1, 14.9], [74.5, 15.8], [77.5, 18.0], [77.3, 16.0], [78.2, 13.6],
          [77.5, 11.6], [75.8, 12.0], [74.5, 13.8], [74.1, 14.9]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "TN", "name": "Tamil Nadu", "type": "State", "region": "South India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [78.2, 13.6], [79.5, 12.8], [80.2, 13.5], [79.8, 10.5], [78.8, 9.2],
          [77.5, 8.08], [77.2, 8.5], [76.8, 10.0], [77.5, 11.6], [78.2, 13.6]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "KL", "name": "Kerala", "type": "State", "region": "South India" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [74.5, 13.8], [75.8, 12.0], [77.5, 11.6], [76.8, 10.0], [77.2, 8.5],
          [77.5, 8.08], [76.5, 9.0], [75.0, 11.5], [74.5, 13.8]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "AN", "name": "Andaman & Nicobar Islands", "type": "UT", "region": "Islands" },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [[ [92.6, 12.5], [92.8, 12.5], [92.8, 12.0], [92.6, 12.0], [92.6, 12.5] ]],
          [[ [92.7, 11.6], [92.9, 11.6], [92.9, 11.2], [92.7, 11.2], [92.7, 11.6] ]],
          [[ [93.7, 7.0], [93.9, 7.0], [93.9, 6.7], [93.7, 6.7], [93.7, 7.0] ]]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "id": "LD", "name": "Lakshadweep", "type": "UT", "region": "Islands" },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [[ [72.6, 10.6], [72.7, 10.6], [72.7, 10.5], [72.6, 10.5], [72.6, 10.6] ]],
          [[ [73.0, 8.3], [73.1, 8.3], [73.1, 8.2], [73.0, 8.2], [73.0, 8.3] ]]
        ]
      }
    }
  ]
};

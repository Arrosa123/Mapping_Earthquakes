// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [

  
  [37.6213, -122.3790],
  [30.194528, -97.669889],
  [43.6775, -79.63084],
  [40.63972, -73.77889]
  
  
];

  // Create a polyline using the line coordinates and make the line red.
L.polyline( line, {
    color: "blue"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets =  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiYXJyb3NhMTIzIiwiYSI6ImNsMTFpb3VxazFheTYza28wd2tzcXpuMjIifQ.tSBa3Wxd3qIrvfV0l6rCDQ'
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
    //create map
    var map = L.map('mapcontainer', {
        center: [40.70, -74.0044],
        zoom: 11,
    });

    //tile layer
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

// sportsstadiums layer
 var sports = L.layerGroup();
// marker variables
  L.circleMarker([40.6825, -73.9750], {color:'red',}).bindPopup('Barclays Center (Brooklyn Nets / NY Islanders)').addTo(sports),
  L.circleMarker([40.7505, -73.9934], {color:'red',}).bindPopup('Madison Square Garden (NY Knicks / NY Rangers)').addTo(sports),
  L.circleMarker([40.8296, -73.9262], {color:'red',}).bindPopup('Yankee Stadium (NY Yankees)').addTo(sports),
  L.circleMarker([40.7571, -73.8458], {color:'red',}).bindPopup('Citi Field (NY Mets)').addTo(sports),
  L.circleMarker([40.8128, -74.0742], {color:'red',}).bindPopup('MetLife Stadium (NY Giants / NY Jets)').addTo(sports),
  L.circleMarker([40.7336, -74.1711], {color:'red',}).bindPopup('Prudential Center (NJ Devils)').addTo(sports);

// landmarks layer
    var landmark = L.layerGroup();

//marker variables

  L.circleMarker([40.712991,-74.013152], {color: 'blue',}).bindPopup('One World Trade Center').addTo(landmark),
  L.circleMarker([40.748429,-73.985694], {color: 'blue',}).bindPopup('Empire State Building').addTo(landmark),
  L.circleMarker([40.756758,-73.986053], {color: 'blue',}).bindPopup('Time Square').addTo(landmark),
  L.circleMarker([40.689299,-74.044504], {color: 'blue',}).bindPopup('Statue of Liberty').addTo(landmark),
  L.circleMarker([40.752617,-73.977320], {color: 'blue',}).bindPopup('Grand Central Terminal').addTo(landmark);   
   
  
//add layers to map

sports.addTo(map);
landmark.addTo(map);

//create overlays 

var overlays = {
    "Sport Stadiums": sports,
    "Landmarks": landmark
    };

//control layers
L.control.layers(null,overlays, {collapsed:false}).addTo(map);

//scalebars
L.control.scale({
  metric: false,
  imperial: true,
  maxWidth: 200,
}).addTo(map);



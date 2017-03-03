function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    minZoom: 1,
    center: new google.maps.LatLng(0, 0)
  });

  var marker_London = new google.maps.Marker({
    position: {lat: 51.5074, lng: -0.1278},
    map: map,
    title: "London",
  });
  var contentString_London = "Sophie - 20";
  var infowindow_London = new google.maps.InfoWindow({
    content: contentString_London
  });
  marker_London.addListener('click', function() {
    infowindow_London.open(map, marker_London);
  });

  var marker_Paris = new google.maps.Marker({
    position: {lat: 48.8566, lng: 2.3522},
    map: map,
    title: "Paris",
  });
  var contentString_Paris = "Jean - 30";
  var infowindow_Paris = new google.maps.InfoWindow({
    content: contentString_Paris
  });
  marker_Paris.addListener('click', function() {
    infowindow_Paris.open(map, marker_Paris);
  });

  var marker_NewYork = new google.maps.Marker({
    position: {lat: 40.7128, lng: -74.0059},
    map: map,
    title: "New York",
  });
  var contentString_NewYork = "Cindy - 24";
  var infowindow_NewYork = new google.maps.InfoWindow({
    content: contentString_NewYork
  });
  marker_NewYork.addListener('click', function() {
    infowindow_NewYork.open(map, marker_NewYork);
  });

  var marker_Sydney = new google.maps.Marker({
    position: {lat: -33.8688, lng: 151.2093},
    map: map,
    title: "Sydney",
  });
  var contentString_Sydney = "Brian - 36";
  var infowindow_Sydney = new google.maps.InfoWindow({
    content: contentString_Sydney
  });
  marker_Sydney.addListener('click', function() {
    infowindow_Sydney.open(map, marker_Sydney);
  });

  var marker_Tokyo = new google.maps.Marker({
    position: {lat: 35.6895, lng: 139.6917},
    map: map,
    title: "Tokyo",
  });
  var contentString_Tokyo = "Isobel - 24";
  var infowindow_Tokyo = new google.maps.InfoWindow({
    content: contentString_Tokyo
  });
  marker_Tokyo.addListener('click', function() {
    infowindow_Tokyo.open(map, marker_Tokyo);
  });

  var marker_LosAng = new google.maps.Marker({
    position: {lat: 34.0522, lng: -118.2437},
    map: map,
    title: "Los Angeles",
  });
  var contentString_LosAng = "Anna - 25";
  var infowindow_LosAng = new google.maps.InfoWindow({
    content: contentString_LosAng
  });
  marker_LosAng.addListener('click', function() {
    infowindow_LosAng.open(map, marker_LosAng);
  });

  var marker_Rio = new google.maps.Marker({
    position: {lat: -22.9068, lng: -43.1729},
    map: map,
    title: "Rio de Janeiro",
  });
  var contentString_Rio = "Paolo - 27";
  var infowindow_Rio = new google.maps.InfoWindow({
    content: contentString_Rio
  });
  marker_Rio.addListener('click', function() {
    infowindow_Rio.open(map, marker_Rio);
  });

};

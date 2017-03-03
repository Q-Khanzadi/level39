function initMap() {
  var London = {lat: 51.5074, lng: -0.1278};
  var Paris = {lat: 48.8566, lng: 2.3522};
  var NewYork = {lat: 40.7128, lng: -74.0059};
  var Sydney = {lat: -33.8688, lng: 151.2093};
  var Tokyo = {lat: 35.6895, lng: 139.6917};
  var Rio = {lat: -22.9068, lng: -43.1729};
  var LosAng = {lat: 34.0522, lng: -118.2437};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    minZoom: 1,
    center: new google.maps.LatLng(0, 0)
  });

  var marker_London = new google.maps.Marker({
    position: London,
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
    position: Paris,
    map: map,
    title: "Paris",
  });
  var marker_NewYork = new google.maps.Marker({
    position: NewYork,
    map: map,
    title: "New York",
  });
  var marker_Sydney = new google.maps.Marker({
    position: Sydney,
    map: map,
    title: "Sydney",
  });
  var marker_Tokyo = new google.maps.Marker({
    position: Tokyo,
    map: map,
    title: "Tokyo",
  });
  var marker_LosAng = new google.maps.Marker({
    position: LosAng,
    map: map,
    title: "Los Angeles",
  });
  var marker_Rio = new google.maps.Marker({
    position: Rio,
    map: map,
    title: "Rio de Janeiro",
  });

};

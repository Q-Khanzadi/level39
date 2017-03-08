function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    minZoom: 1,
    center: new google.maps.LatLng(0, 0)
  });

  var marker_London = new google.maps.Marker({
    position: {lat: 51.5074, lng: -0.1278},
    map: map,
    title: "London",
  });
  var contentString_London = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Sophie - 20</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Sophie</b>, aged <b>20</b> from <b>London</b>! I love trying <br/> the different Street Food Stalls around London,<br/> and going on nights out - my favourite types <br/>of music are Techno and Drum \& Bass.</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Sophie.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
  var infowindow_London = new google.maps.InfoWindow({
    content: contentString_London,
    maxWidth: 500
  });
  marker_London.addListener('click', function() {
    infowindow_London.open(map, marker_London);
  });

  var marker_Paris = new google.maps.Marker({
    position: {lat: 48.8566, lng: 2.3522},
    map: map,
    title: "Paris",
  });
  var contentString_Paris = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Nathalie - 20</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Nathalie</b>, aged <b>20</b> from <b>Paris</b>! I love finding <br/>underground bars in Paris, <br/>and finding the best Steak-frites!</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Nathalie.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
  var infowindow_Paris = new google.maps.InfoWindow({
    content: contentString_Paris,
    maxWidth: 500
  });
  marker_Paris.addListener('click', function() {
    infowindow_Paris.open(map, marker_Paris);
  });

  var marker_NewYork = new google.maps.Marker({
    position: {lat: 40.7128, lng: -74.0059},
    map: map,
    title: "New York",
  });
  var contentString_NewYork = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Isobel - 24</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Isobel</b>, aged <b>24</b> from <b>New York</b>! I love going <br/>to Broadway shows, chilling out in Central Park<br/>with my sausage dog, Ernie, and finding the best bagel <br/>places to eat!</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Isobel.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
  var infowindow_NewYork = new google.maps.InfoWindow({
    content: contentString_NewYork,
    maxWidth: 500
  });
  marker_NewYork.addListener('click', function() {
    infowindow_NewYork.open(map, marker_NewYork);
  });

  var marker_Sydney = new google.maps.Marker({
    position: {lat: -33.8688, lng: 151.2093},
    map: map,
    title: "Sydney",
  });
  var contentString_Sydney = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Toby - 19</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Toby</b>, aged <b>19</b> from <b>Sydney</b>! I love being <br/>able to hang out in different bars in the town,<br/>and then chill out with a barbie on the beach, <br/>watching the beautiful sunset over the Opera House.</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Toby.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
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
  var contentString_Tokyo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">James - 34</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>James</b>, aged <b>34</b> from <b>Tokyo</b>! <br/>I\'ve only just arrived here a few weeks ago, <br/>so I\'d love to find people to help me explore<br/>and eat lots of ramen!</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="james.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
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
  var contentString_LosAng = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Anna - 22</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Anna</b>, aged <b>22</b> from <b>Los Angeles</b>! I love cruising <br/>down Venice Beach on my skateboard, and then<br/>stopping off for a burrito with my friends.</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Anna.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
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
  var contentString_Rio = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<div display="block" float="left">'+
      '<h3 id="firstHeading" horizontal-align="center" class="firstHeading" position="absolute">Paolo - 41</h3>'+
      '<p display="table-cell" text-align="justify">Hi I\'m <b>Paolo</b>, aged <b>41</b> from <b>Rio de Janeiro</b>! I really <br/>enjoy getting lost in the market, where they do <br/>amazing churros with chocolate sauce.The football spirit <br/>is one of the best things about Brazilians</p>'+
      '</div>'+ //left float div
      '<div display="block" float="right">'+
      '<img src="Paolo.jpg" height="80px" width="80px" horizontal-align="center" vertcal-align="middle" display="table-cell" vertical-align="middle" style="border-radius:50%" >'+
      '</div>'+ //right float div
      '<button type="button" class="btn">Contact me</button>'+
      '</div>'+ //body content div
      '</div>';
  var infowindow_Rio = new google.maps.InfoWindow({
    content: contentString_Rio
  });
  marker_Rio.addListener('click', function() {
    infowindow_Rio.open(map, marker_Rio);
  });

};

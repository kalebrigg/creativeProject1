
let map;

function initMap() {
    console.log("init map called from callback");
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

}

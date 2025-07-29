const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianBlZXJzb24iLCJhIjoiY21kbnFnaDhvMDV4NDJtcG1yYnhjaXJhMiJ9.w7XPyLPD7rTpXdlOt7EE-Q"

navigator.geolocation.getCurrentPosition(succcessLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: centerPosition,
    zoom: 15, // starting zoom
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })
  map.addControl(directionControls, "top-left")
}

function succcessLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

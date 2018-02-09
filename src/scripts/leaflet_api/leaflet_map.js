//TODO: see about importing leaflet core or maps
//L comes in from index.html CDN link right now



export function setUpMap(domTarget, latlong) {
	
	const beerMap = L.map(domTarget).setView(latlong, 13);
	
	window.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFzb24tYyIsImEiOiJjamQ5N2x0NWM2YmRrMzNvMXRraHllNWxlIn0.jE7PwynjVblGOUusGQF2Pg', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiamFzb24tYyIsImEiOiJjamQ5N2x0NWM2YmRrMzNvMXRraHllNWxlIn0.jE7PwynjVblGOUusGQF2Pg'
	}).addTo(beerMap);
	
	return beerMap;
}
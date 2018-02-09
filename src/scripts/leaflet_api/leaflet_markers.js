//TODO: see about importing leaflet core or maps
//L comes in from index.html CDN link right now


export function setMarkers(mapId, dataList) {
	
	return window.L.layerGroup(dataList.map(item => {
		
		return L.marker([item.latitude, item.longitude]);
		
	})).addTo(mapId);
}
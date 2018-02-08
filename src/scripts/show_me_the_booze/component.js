import { apiSets } from '../lcbo_api/lcbo_api';
import { searchForDrinks } from '../lcbo_api/lcbo_api_fetch';
import { dataReducer } from '../lcbo_api/lcbo_api_data_adapters';
import { setMarkers } from '../leaflet_api/leaflet_markers'



let markerList = null;

export const findLocation = searchForDrinks(
	apiSets.location.url,
	apiSets.apiKey,
	apiSets.location.baseParams,
	'product_id'
);

const searchReducer = dataReducer(['latitude','longitude','name', 'postal_code','telephone','inventory_volume_in_milliliters']);

export function updateDateMap(mapId) {
	return resp => {
		
		let data =  searchReducer(resp.result);
		
		if (markerList && markerList.clearLayers) {
			markerList.clearLayers();
		}
		
		markerList = setMarkers(mapId, data);
		
		return markerList;
	}
}


import { apiSets } from '../lcbo_api/lcbo_api';
import { searchForDrinks } from '../lcbo_api/lcbo_api_fetch';
import { dataReducer } from '../lcbo_api/lcbo_api_data_adapters';
import { listItemsForBeer, unorderedListContainer as listBuilder} from '../html_elements/list_builder';

export const findDrink = searchForDrinks(
	apiSets.beverage.url,
	apiSets.apiKey,
	apiSets.beverage.baseParams,
	'q'
);

const searchReducer = dataReducer(['image_thumb_url','name','producer_name','id']);

export function updateOutPut( dropDownTarget) {
	return resp => {
		let data =  searchReducer(resp.result);
		renderDropDown(data, dropDownTarget)
	}
}

export function renderDropDown(data = [], dropDownTarget ) {
	dropDownTarget.innerHTML = '';
	dropDownTarget.appendChild(
		setUpDOMStructure(
			listBuilder(data, listItemsForBeer)
		)
	);
}

export function setUpDOMStructure(templateString) {
	const frag = document.createDocumentFragment();
	
	frag.appendChild(document.createElement('div'));
	frag.firstElementChild.innerHTML = templateString;
	
	return frag;
}





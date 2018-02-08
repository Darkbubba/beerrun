import { apiSets } from '../lcbo_api/lcbo_api';
import { searchForDrinks } from '../lcbo_api/lcbo_api_fetch';
import { dataReducer } from '../lcbo_api/lcbo_api_data_adapters';

export const findDrink = searchForDrinks(
	apiSets.beverage.url,
	apiSets.apiKey,
	apiSets.beverage.baseParams,
	'q'
);

const searchReducer = dataReducer(['image_thumb_url','name','producer_name','id']);

export function updateOutPut( dropDownTarget) {
	return resp => {
		
		let data =  searchReducer(resp.result)
		return displayData(data, dropDownTarget);
	}
}

export function displayData(data, dropDownTarget) {
	const dropDownRenderer = renderFactory(dropDownTarget, dropDownTemplate())
	
	return dropDownRenderer.renderDropDown(data)
}

function dropDownTemplate() {
	
	return (data)=>`${data.map(item=>{return `<div id="${item.id}" data-item="${item.id}" class="drop-down-item"><img src="${item.image_thumb_url}" class="thumb" data-item="${item.id}"/><div><div data-item="${item.id}">${item.name}</div><div data-item="${item.id}">${item.producer_name}</div></div></div>`}).join('')}`
	
}

const renderFactory = function(mainTarget, template) {
	
	const localMainTarget = mainTarget;
	const localTemplate = template;
	const frag = document.createDocumentFragment()
	
	function applyDataToTemplate(data = [], template = localTemplate) {
		
		return localTemplate(data);
		
	}
	
	function setUpDOMStructure(templateString) {
		
		frag.appendChild(document.createElement('div'));
		frag.firstElementChild.innerHTML = templateString;
		
		return frag;
	}
	
	function renderDropDown(data = [], template = localTemplate ) {
		
		localMainTarget.innerHTML = '';
		return localMainTarget.appendChild(setUpDOMStructure(applyDataToTemplate(data,template)));
	}
	
	return {
		applyDataToTemplate,
		setUpDOMStructure,
		renderDropDown
	}
}
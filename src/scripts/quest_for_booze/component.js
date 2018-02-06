import * as lcbo from '../lcbo_api/lcbo_api_fetch';
import {dataReducer} from '../lcbo_api/lcbo_api_data_adapters';

export function updateDateOutPut(dropDownTarget) {
	return resp => {
		
		console.log(resp);
		
		let data =  dataReducer(resp.result, ['image_thumb_url','name','producer_name','id'])
		displayData(data, dropDownTarget);
	}
}

export function displayData(data, dropDownTarget) {
	const dropDownRenderer = renderFactory(dropDownTarget, dropDownTemplate())
	
	dropDownRenderer.renderDropDown(data)
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
		localMainTarget.appendChild(setUpDOMStructure(applyDataToTemplate(data,template)));
	}
	
	return {
		applyDataToTemplate,
		setUpDOMStructure,
		renderDropDown
	}
}
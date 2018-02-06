import * as lcbo from './lcbo_api/lcbo_api_fetch';
import {requestData, updateDateOutPut, setUp} from './quest_for_booze/component';
import * as leaflet from './leaflet_api/leaflet_map';
import {Observable} from 'rxjs/Rx';


const apiService = lcbo.searchForDrinks();
const inputSource = document.querySelector('#quest-for-booze > input')
const dropDownTarget = document.querySelector('#quest-for-booze > div');

let boozeRequest;

//handle DOM Events
let whatToLookFor = Observable.fromEvent(inputSource, 'keyup');


whatToLookFor.subscribe(event => {
	const value = event.target.value;
	//handle API returns
	boozeRequest = Observable.fromPromise(apiService(value));;
	boozeRequest.subscribe(updateDateOutPut(dropDownTarget));//(func, error, complete)
})


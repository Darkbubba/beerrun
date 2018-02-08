import {updateOutPut, findDrink} from './quest_for_booze/component';
import {updateDateMap, findLocation, initMap} from './show_me_the_booze/component';
import {latlongList} from './leaflet_api/leaflet_map_setup';
import {setUpMap} from './leaflet_api/leaflet_map'
import {Observable} from 'rxjs/Rx';


const inputSource = document.querySelector('#quest-for-booze > input')
const dropDownTarget = document.querySelector('#quest-for-booze > div');
//const mapSource =  document.getElementById('show-me-the-booze');

const beerMap = setUpMap('show-me-the-booze', latlongList.toronto);

//handle DOM Events
let whatToLookFor = Observable.fromEvent(inputSource, 'keyup')
	.map(event => event.target.value)
	.debounceTime(1000);

let whereTheBoozeIs = Observable.fromEvent(dropDownTarget, 'mouseup')
	.map(event => event.target.getAttribute('data-item'))
	.debounceTime(50);

whatToLookFor.subscribe(value => {
	
	let boozeRequest = Observable.fromPromise(findDrink(value));
	boozeRequest.subscribe(updateOutPut(dropDownTarget));//(func, error, complete)
	
});

whereTheBoozeIs.subscribe(value => {
	
	let boozeLocation = Observable.fromPromise(findLocation(value));;
	boozeLocation.subscribe(updateDateMap(beerMap));//(func, error, complete)
	
});
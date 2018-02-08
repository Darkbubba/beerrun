let should = require('should');

const mapSetUp = require('./leaflet_map');
const mapCoords = require('./leaflet_map_setup');
const mapMarkers = require('./leaflet_markers');

describe('LEAFLET/MAPBOX support files', function(){
	describe('test leaflet.map.js', function(){
		describe('test setUpMap functionality',function(){
			it('should return leaflet object but that functionality requires a DOM node - implement ENZYME');
		})
	});
	
	describe('test leaflet.markers.js', function(){
		describe('test setMarkers functionality',function(){
			it('should return leaflet layerGroup Object but that functionality requires a DOM node - implement ENZYME ...AND a way to get leaflet set up for use in testing TBD');
		})
	});
	
	describe('test leaflet_map_setup.js',function(){
		const latlong = mapCoords.latlongList;
		
		it('should return an object', function(){
			
			latlong.should.be.instanceof(Object);
		});
		
		it('should have array with length of 2 as values for each key', function(){
		
			Object.keys(latlong).map(function(item){
				latlong[item].length.should.be.equal(2);
			})
		
		});
		
		it('should have only numbers for each value in the array', function(){
			
			Object.keys(latlong).map(function(item){
				latlong[item][0].should.be.instanceof(Number);
				latlong[item][1].should.be.instanceof(Number);
			})
			
		})
		
	})


})


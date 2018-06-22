
let listBuilder = require('./list_builder');

describe('testing list_builder/updateOutPut', function(){
	describe('it should return a string ', function(){
		
		const reducedData = [{"name":"Hogsback Vintage Lager","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","producer_name":"Hogsback Brewing Company",	"id":289793}];
		const list = listBuilder.unorderedListContainer(reducedData, listBuilder.listItemsForBeer);
		
		list.should.be.instanceOf(String);
		
	});
	
	describe('it should out put the correct string', function(){
		
		const correctString = '<ul><li id="289793" data-item="289793" class="drop-down-item"><img src="https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png" class="thumb" data-item="289793"/><div><div data-item="289793">Hogsback Vintage Lager</div><div data-item="289793">Hogsback Brewing Company</div></div></li></ul>';
		const reducedData = [{"name":"Hogsback Vintage Lager","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","producer_name":"Hogsback Brewing Company",	"id":289793}];
		const list = listBuilder.unorderedListContainer(reducedData, listBuilder.listItemsForBeer);
		list.should.be.equal(correctString);
	});
	
});

describe('testing listItemsForBeer', function(){
	describe('it should be a string', function() {
		const reducedData = [{"name":"Hogsback Vintage Lager","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","producer_name":"Hogsback Brewing Company",	"id":289793}];
		const list = listBuilder.listItemsForBeer(reducedData);
		
		list.should.be.instanceOf(String);
	});
	
	describe('it should be the correct string', function(){
		const correctString = '<li id="289793" data-item="289793" class="drop-down-item"><img src="https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png" class="thumb" data-item="289793"/><div><div data-item="289793">Hogsback Vintage Lager</div><div data-item="289793">Hogsback Brewing Company</div></div></li>';
		const reducedData = {"name":"Hogsback Vintage Lager","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","producer_name":"Hogsback Brewing Company",	"id":289793};
		const list = listBuilder.listItemsForBeer(reducedData);
		list.should.be.equal(correctString);
	});
});
let questFor = require('./component');
let dataAdapter = require('../lcbo_api/lcbo_api_data_adapters');

let fakeAPIResp = {"status":200,"message":null,"pager":{"records_per_page":10,"total_record_count":10,"current_page_record_count":10,"is_first_page":true,"is_final_page":true,"current_page":1,"current_page_path":"/products?\u0026per_page=10\u0026where_not=is_dead,%20is_discontinued\u0026q=hog\u0026page=1","next_page":null,"next_page_path":null,"previous_page":null,"previous_page_path":null,"total_pages":1,"total_pages_path":"/products?\u0026per_page=10\u0026where_not=is_dead,%20is_discontinued\u0026q=hog\u0026page=1"},"result":[{"id":289793,"is_dead":false,"name":"Hogsback Vintage Lager","tags":"hogsback vintage lager beer canada ontario brewing company can","is_discontinued":false,"price_in_cents":275,"regular_price_in_cents":275,"limited_time_offer_savings_in_cents":0,"limited_time_offer_ends_on":null,"bonus_reward_miles":0,"bonus_reward_miles_ends_on":null,"stock_type":"LCBO","primary_category":"Beer","secondary_category":"Lager","origin":"Canada, Ontario","package":"473 mL can","package_unit_type":"can","package_unit_volume_in_milliliters":473,"total_package_units":1,"volume_in_milliliters":473,"alcohol_content":520,"price_per_liter_of_alcohol_in_cents":1118,"price_per_liter_in_cents":581,"inventory_count":1443,"inventory_volume_in_milliliters":682539,"inventory_price_in_cents":396825,"sugar_content":null,"producer_name":"Hogsback Brewing Company","released_on":null,"has_value_added_promotion":false,"has_limited_time_offer":false,"has_bonus_reward_miles":false,"is_seasonal":false,"is_vqa":false,"is_ocb":false,"is_kosher":false,"value_added_promotion_description":null,"description":null,"serving_suggestion":null,"tasting_note":null,"updated_at":"2018-02-08T14:26:21.437Z","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","image_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/full.jpeg","varietal":"Vienna Lager","style":"Medium \u0026 Floral","tertiary_category":"Amber Lager","sugar_in_grams_per_liter":null,"clearance_sale_savings_in_cents":0,"has_clearance_sale":false,"product_no":289793}]};


describe('testing quest_for component', function(){
	describe('findDrink should be a function', function(){
		
		let findDrink = questFor.findDrink;
		
		it('should return a function', function(){
			findDrink.should.be.instanceof(Function);
		});
		
	});
	
	describe('searchReducer', function(){
		const searchReducer = dataAdapter.dataReducer(['image_thumb_url','name','producer_name','id']);
		const reducedData = [{"name":"Hogsback Vintage Lager","image_thumb_url":"https://dx5vpyka4lqst.cloudfront.net/products/289793/images/thumb.png","producer_name":"Hogsback Brewing Company",	"id":289793}];
		
		it('should return a function', function(){
			searchReducer.should.be.instanceof(Function);
		});
		
		it('should only have the correct data set', function(){
			searchReducer(fakeAPIResp.result).should.deepEqual(reducedData)
		})
		
	});
	
	describe('updateOutPut', function(){
		let updateOutPut = questFor.updateOutPut();
		
		it('should return a function', function() {
			updateOutPut.should.be.instanceof(Function);
		});
		
	})
	
});
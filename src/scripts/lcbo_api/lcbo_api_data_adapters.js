export function dataReducer( desiredData = {} ) {
	
	return rawData => {
		
		return rawData.reduce((collector, raw)=>{
			let data = {};
			desiredData.forEach(key=>{
				data[key] = raw[key];
			});
			
			collector.push(data);
			
			return collector;
			
		},[])
		
	}
	
	
}
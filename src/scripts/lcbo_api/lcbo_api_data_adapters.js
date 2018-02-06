export function dataReducer(rawData = [], desiredData = {}) {
	
	return rawData.reduce((collector, raw)=>{
		let data = {}
		desiredData.forEach(key=>{
			data[key] = raw[key]
		})
		
		collector.push(data)
		
		return collector
		
	},[])
	
}
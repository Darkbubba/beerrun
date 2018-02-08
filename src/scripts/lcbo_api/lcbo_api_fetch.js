
export function searchForDrinks(url, apiKey, returnParams, searchParam) {
	
	return (term) => {
		
		returnParams[searchParam] = term;
		
		const urlString = makeUrlStringFromObject(returnParams, url)
		
		const headers = makeRequestObject(urlString, apiKey);
		
		async function func(headers) {
			
			try {
				const response = await fetch(headers);
				return await response.json();
			} catch(e) {
				console.log(e)
			}
			
		}
		
		return func(headers);
		
	}

}

export function makeUrlStringFromObject(paramsObject, baseUrl ) {
	let r = baseUrl;
	if (typeof baseUrl === 'string' && Object.keys(paramsObject).length >0) {
		r += '?';
		Object.keys(paramsObject).forEach(item => {
			r += '&'+item + '=' + paramsObject[item];
		})
	}
	
	return r; //TODO: urlEncode
}

export function makeRequestObject(url, apiKey) {
	const headers = new Headers();
	headers.append('Authorization', 'Token ' + apiKey);
	
	const config = {
		method:'get',
		mode:'cors',
		credentials:'omit',
		headers
	};
	
	return new Request(url, config);
}



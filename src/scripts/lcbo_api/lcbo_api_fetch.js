
const baseApiKey = 'MDpiM2VmYTVkMi0wOTZlLTExZTgtOTBjYi1jNzBmYzc4ZjA2MDc6bjliaGRCZjI3RUFIVUhZYThWSFhFYW9BYVdlTHlnSmVCek9j';
const baseUrl = 'http://lcboapi.com/products';

const baseParams = {
	per_page:10,
	where_not: 'is_dead, is_discontinued'
	
};

export function searchForDrinks(url = baseUrl, apiKey = baseApiKey, returnParams = baseParams) {
	
	return (term) => {
		
		returnParams.q = term;
		
		const urlString = makeUrlStringFromObject(returnParams, url)
		console.log('>>'+urlString)
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

function makeUrlStringFromObject(paramsObject, baseUrl ) {
	let r = baseUrl;
	if (typeof baseUrl === 'string' && Object.keys(paramsObject).length >0) {
		r += '?';
		Object.keys(paramsObject).forEach(item => {
			r += '&'+item + '=' + paramsObject[item];
		})
	}
	
	return r;
}

function makeRequestObject(url = baseUrl, apiKey = apiKey) {
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



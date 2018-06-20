export const apiSets = {
	apiKey : 'MDpiM2VmYTVkMi0wOTZlLTExZTgtOTBjYi1jNzBmYzc4ZjA2MDc6bjliaGRCZjI3RUFIVUhZYThWSFhFYW9BYVdlTHlnSmVCek9j',
	beverage : {
		url : 'http://lcboapi.com/products',
		baseParams : {
			per_page: 10,
			where_not: 'is_dead, is_discontinued'
			
		}
	},
	location : {
		url : 'http://lcboapi.com/stores',
		baseParams : {
			per_page: 40,
			page:1
			
		}
	}
};

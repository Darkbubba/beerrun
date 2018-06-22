export function unorderedListContainer( data, listItemBuilder ) {
	return `<ul>${data.map(item => listItemBuilder(item)).join('')}</ul>`;
}

export function listItemsForBeer( data ) {
	return `<li id="${data.id}" data-item="${data.id}" class="drop-down-item">
				<img src="${data.image_thumb_url}" class="thumb" data-item="${data.id}"/>
				<div>
					<div data-item="${data.id}">${data.name}</div>
					<div data-item="${data.id}">${data.producer_name}</div>
				</div>
			</li>`.replace(/\t|\n/g, '');
}
export const search = query => {
	return fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
		method: 'GET',
		mode: 'cors'
	})
};


export const shows = showId =>{
	return fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
		method: 'GET',
		mode: 'cors'
	})
};

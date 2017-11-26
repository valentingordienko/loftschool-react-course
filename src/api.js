export const search = query => {
	return fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
		method: 'GET',
		mode: 'cors'
	})
};



export const show = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors'
  }).then(response => response.json());

import {search} from '../api';//
import Actions from '../actions/actions';//


export default store => next => action => {

	if (action.type === Actions.fetch.search.request.toString()) {

		search(action.payload)
			.then(response => {

				if(+response.status === 200){

					return response.json();

				} else {

					return response.error();
				}
			})
			.then(shows => {

				const result = shows.map(show => show.show);
				store.dispatch(Actions.fetch.search.success(result))
			})
			.catch(error => {

				store.dispatch(Actions.fetch.search.failure(error))
			})
	}

	return next(action);
}
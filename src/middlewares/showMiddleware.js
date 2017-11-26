import {shows} from '../api';//
import Actions from '../actions/actions';//


export default store => next => action => {

	if (action.type === Actions.fetch.shows.request.toString()) {

		shows(action.payload)
			.then(response => {

				if(+response.status === 200){

					return response.json();

				} else {

					return response.error();
				}
			})
			.then(result => {

				store.dispatch(Actions.fetch.shows.success(result))
			})
			.catch(error => {

				store.dispatch(Actions.fetch.shows.failure(error))
			})
	}

	return next(action);
}
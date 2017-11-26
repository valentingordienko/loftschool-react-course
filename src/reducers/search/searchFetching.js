import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.search.request]: (state, action) => true,
		[Actions.fetch.search.success]: (store, action) => false,
		[Actions.fetch.search.failure]: (store, action) => false,
	},
	false
)

/*
export default (store = initialState, action) => {

	switch (action.type) {

		case Actions.fetch.search.request.toString():

			return {
				...store,
			searchFetching: true,
			searchFetchSuccess: false,
			searchFetchError: false,
			result: []
			};

		case Actions.fetch.search.success.toString():

			return {
				...store,
				searchFetching: false,
				searchFetchSuccess: true,
				searchFetchError: false,
				result: action.payload
			};

		case Actions.fetch.search.failure.toString():

			return {
				...store,
				searchFetching: false,
				searchFetchSuccess: false,
				searchFetchError: true,
				result: action.payload
			};

		default:
			return store
	}
};*/

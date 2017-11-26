import {createActions} from 'redux-actions';//

export default createActions(
	{
		FETCH: {
			SEARCH: {
				REQUEST: searchString => searchString,
				SUCCESS: data => data,
				FAILURE: error => error
			},
			SHOWS: {
				REQUEST: searchString => searchString,
				SUCCESS: data => data,
				FAILURE: error => error
			},
		}
	},
	{namespace: '_'}
);
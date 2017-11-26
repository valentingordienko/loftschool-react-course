import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.shows.success]: (store, action) => action.payload,
		[Actions.fetch.shows.failure]: (store, action) => action.payload,
	},
	[]
);
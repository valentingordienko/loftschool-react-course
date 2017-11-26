import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.search.success]: (store, action) => action.payload,
		[Actions.fetch.search.failure]: (store, action) => action.payload,
	},
	[]
);
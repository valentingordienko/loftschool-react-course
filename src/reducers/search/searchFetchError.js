import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.search.request]: (state, action) => false,
		[Actions.fetch.search.success]: (store, action) => false,
		[Actions.fetch.search.failure]: (store, action) => true,
	},
	false
);
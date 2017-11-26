import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.shows.request]: () => false,
		[Actions.fetch.shows.success]: () => false,
		[Actions.fetch.shows.failure]: () => true,
	},
	false
);
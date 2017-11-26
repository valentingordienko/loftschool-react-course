import {handleActions} from 'redux-actions';//

import Actions from '../../actions/actions';//


export default handleActions({
		[Actions.fetch.shows.request]: () => false,
		[Actions.fetch.shows.success]: () => true,
		[Actions.fetch.shows.failure]: () => false,
	},
	false
);
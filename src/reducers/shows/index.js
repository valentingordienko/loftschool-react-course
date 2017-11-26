import {combineReducers} from 'redux';//

import showsFetching from './showsFetching';//
import showsFetchSuccess from './showsFetchSuccess';//
import showsFetchError from './showsFetchError';//
import showsFetchResult from './showsFetchResult';//


export default combineReducers({
	showsFetching,
	showsFetchSuccess,
	showsFetchError,
	result: showsFetchResult
})
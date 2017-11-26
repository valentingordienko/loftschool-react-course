import {combineReducers} from 'redux';//

import searchFetching from './searchFetching';//
import searchFetchSuccess from './searchFetchSuccess';//
import searchFetchError from './searchFetchError';//
import searchFetchResult from './searchFetchResult';//


export default combineReducers({
	searchFetching,
	searchFetchSuccess,
	searchFetchError,
	result: searchFetchResult
})
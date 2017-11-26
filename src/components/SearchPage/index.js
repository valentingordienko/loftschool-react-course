import React, {Component} from 'react';//
import {connect} from 'react-redux';//
import Actions from '../../actions/actions';//

import './Search.css';//

import SearchResultItem from '../SearchResultItem/';//

class Search extends Component {

	constructor(props) {
		super(props);
		this.searchInput = null;
	};

	handleInputKeyDown = (event) => {

		if (+event.keyCode === 13) {

			this.dispatchSearchRequest();
		}
	};

	dispatchSearchRequest = () => {

		const searchingString = this.searchInput.value.trim();

		if (searchingString) {
			this.props.dispatchSearchRequest(searchingString);
		}
	};

	render() {

		const {result, searchFetching, searchFetchError, searchFetchSuccess} = this.props;

		return (
			<div className="search">
				<div className="search-bar">
					<input
						className="search-input"
						onKeyDown={this.handleInputKeyDown}
						ref={element => this.searchInput = element}
					/>
					{
						!searchFetching
							? <button
								className="search-button"
								onClick={this.dispatchSearchRequest}
							>Найти
							</button>
							: <span className="result-list_loader">Поиск...</span>
					}
				</div>
				<div className="result-list">
					{
						searchFetchSuccess
							?
							result.map(searchItem => {
								return <SearchResultItem
									key={searchItem.name + '-' + searchItem.id}
									resultItem={searchItem}
								/>
							})
							:
							searchFetchError
								?
								<div className="result-list_error">
									<p>Во время поиска что-то пошло не так.</p>
									<p>Попробуйте повторить.</p>
								</div>
								: ''
					}
				</div>
			</div>
		);
	}
}


export default connect(
	(state) => ({...state.search}),
	{
		dispatchSearchRequest: Actions.fetch.search.request
	}
)(Search);
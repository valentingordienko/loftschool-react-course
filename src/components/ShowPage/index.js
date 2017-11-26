import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions/actions';//

import ActorListItem from '../ActorListItem';//

import './ShowsPage.css';//

class ShowPage extends Component {

	componentDidMount = () => {

		const {match, showsFetching, dispatchShowsRequest} = this.props;

		if (!showsFetching) {

			dispatchShowsRequest(match.params.id);
		}
	};

	render() {

		const {showsFetching, showsFetchSuccess, showsFetchError, result} = this.props;

		let content = '';

		if (showsFetching) {

			content = <p>Загрузка данных по сериалу</p>

		} else if (showsFetchError) {

			content = <div className="result-list_error">
									<p>Во время загрузки данных что-то пошло не так.</p>
									<p>Попробуйте повторить.</p>
								</div>

		} else if (showsFetchSuccess) {


			let actorObjectList = [];
			let actorListMarkup = '';

			if(result._embedded && result._embedded.cast){
				actorObjectList = result._embedded.cast;
			}

			if(actorObjectList.length){

				actorListMarkup = <div className="shows-page__actor-list">
														{actorObjectList.map(actor => <ActorListItem key={actor.person.name + actor.person.id} actor={actor.person}/> )}
													</div>
			}

			content = <div className="shows-page">
				<header className="shows-page__header">
					<h1 className="shows-page__title">{result.name}</h1>
					<div className="shows-page__img-container">
						<img className="shows-page__img" src={result.image ? result.image.medium : ''} alt=""/>
					</div>
					<div className="shows-page__description"
							 dangerouslySetInnerHTML={{__html: result.summary}}
					/>
				</header>
				{actorListMarkup}
			</div>
		}


		return content;
	}
}

export default connect(
	(state) => ({...state.shows}),
	{
		dispatchShowsRequest: Actions.fetch.shows.request
	}
)(ShowPage);
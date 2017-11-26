import React from 'react';//
import {Link} from 'react-router-dom';

import './SearchResultItem.css';//

export default ({resultItem}) => {

	return (
		<div className="search-result-item">
			<header className="search-result-item__header">
				<div className="search-result-item__title">
					<Link to={'/shows/'+resultItem.id}>{resultItem.name}</Link>
				</div>
				<div className="search-result-item__image-container">
					<img className="search-result-item__image" src={resultItem.image ? resultItem.image.medium : ''}  alt=""/>
				</div>
			</header>
			<div className="search-result-item__description"
					 dangerouslySetInnerHTML={{__html: resultItem.summary}}/>
		</div>
	)
}
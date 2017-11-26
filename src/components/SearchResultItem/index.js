import React from 'react';//

import './SearchResultItem.css';//

export default ({resultItem}) => {

	return (
		<div className="search-result-item">
			<header className="search-result-item__header">
				<div className="search-result-item__title">
					<a href="/#">{resultItem.name}</a>
				</div>
				<div className="search-result-item__image-container">
					<img className="search-result-item__image" src={resultItem.image ? resultItem.image.medium : ''}/>
				</div>
			</header>
			<div className="search-result-item__description"
					 dangerouslySetInnerHTML={{__html: resultItem.summary}}/>
		</div>
	)
}
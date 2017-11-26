import React from 'react';//

import './ActorListItem.css';//

export default ({actor}) => {

	return (
		<div className="actor-list-item">
			<h3 className="actor-list-item__title">
				{actor.name}
			</h3>
			<div className="actor-list-item__image-container">
				<img className="actor-list-item__image" src={actor.image ? actor.image.medium : ''} alt=""/>
			</div>
		</div>
	)
}
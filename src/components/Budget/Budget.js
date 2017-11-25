import React, {Component} from 'react';//
import {connect} from 'react-redux';//

import './Budget.css';


class Budget extends Component {

	render() {


		const {budget} = this.props;


		return (
			<div className="budget">
				<h2>Бюджет</h2>
				<p>Всего получено денег: {budget.profit}</p>
				<p>Расходы продавцов: {-budget.marketExpanse}</p>
				<p>Расходы на ферме: {-budget.farmExpanse}</p>
				<p>Расходы на доставку: {-budget.deliveryExpanse}</p>
				<p>Итого: {budget.profit - budget.marketExpanse - budget.farmExpanse - budget.deliveryExpanse}</p>
			</div>
		)
	}
}

const mapStateToProps = storeState => {

	return {budget: storeState.budget};
};

export default connect(mapStateToProps)(Budget);
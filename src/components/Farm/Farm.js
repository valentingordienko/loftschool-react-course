import React, {Component} from 'react';
import {connect} from 'react-redux';

import {MoveOrderToCustomer} from '../../actions/farmActions';

import './Farm.css';

import Order from '../Order';

export class Farm extends Component {

	render() {

		const {orders, MoveOrderToCustomer} = this.props;

		return (
			<div className='farm'>
				<h1>Производство на ферме</h1>
				<div className="order-list">
					{orders.map((order, index) => {
						return (
							<Order
								key={order.createdAt.toDateString()+index+order.id+order.price}
								moveOrderToFarm={MoveOrderToCustomer}
								order={order}
								buttonName='Отправить заказ клиенту'
							/>)
					})}
				</div>
			</div>
		);
	}
}


const mapStateToProps = storeState => {

	return {orders: storeState.farm.orders};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/*Здесь пишем методы которые диспатчат события в STORE из компонента*/

		MoveOrderToCustomer(order) {

			dispatch(MoveOrderToCustomer(order));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {CreateOrder, MoveOrderToFarm} from '../../actions/marketActions';

import './Market.css';

import Order from '../Order';


let id = 0;

const getId = () => {
	id += 1;
	return id;
};

export const vegetables = [
	'Капуста',
	'Редиска',
	'Огурцы',
	'Морковь',
	'Горох',
	'Баклажан',
	'Тыква',
	'Чеснок',
	'Лук',
	'Перец',
	'Картофель',
	'Редька'
];

const getNewOrder = () => {
	return {
		id: getId(),
		name: vegetables[Math.floor(Math.random() * vegetables.length)],
		price: 150 + Math.floor(Math.random() * 100),
		createdAt: new Date()
	};
};

export class Market extends Component {


	render() {

		const {orders, CreateOrder, MoveOrderToFarm} = this.props;

		return (
			<div className='market'>
				<h1>Новые заказы в магазине</h1>
				<button onClick={CreateOrder}>Создать заказ</button>
				<div className="order-list">
					{orders.map((order, index) => {
						return (
							<Order
								key={order.createdAt.toDateString()+index+order.id+order.price}
								moveOrderToFarm={MoveOrderToFarm}
								order={order}
								buttonName='Отправить заказ на ферму'
							/>)
					})}
				</div>
			</div>
		);
	}
}


const mapStateToProps = storeState => {

	return {orders: storeState.market.orders};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/*Здесь пишем методы которые диспатчат события в STORE из компонента*/

		CreateOrder() {
			dispatch(CreateOrder(getNewOrder()));
		},

		MoveOrderToFarm(order) {

			dispatch(MoveOrderToFarm(order));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);

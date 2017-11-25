import React from 'react';
import './Order.css';

export default ({order, moveOrderToFarm, buttonName}) => {

	return (
		<div className='order'>
			<div className='order__upper'>
				<p className='p--order'>{order.name}</p>
				<p className='p--order'>Цена: {order.price}</p>
			</div>
			<div className='order__middle'>
				<p className='p--order'>Оформлен: {order.createdAt.toDateString()}</p>
			</div>
			<div className='order__lower'>
				<button onClick={()=>moveOrderToFarm(order)}>{buttonName}</button>
			</div>
		</div>
	)
}
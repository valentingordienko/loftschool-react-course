import ActionTypes from '../actions/actionTypes';// Типы экшенов


const initialState = {
	orders: []
};


export default (storeFarmState = initialState, action) => {

	switch (action.type) {

		/**
		 * Добавление заказа в список
		 */
		case ActionTypes.MOVE_ORDER_TO_FARM:

			return {...storeFarmState, orders: [...storeFarmState.orders, action.payload]};


		/**
		 * Удаление заказа из списка
		 */
		case ActionTypes.MOVE_ORDER_TO_CUSTOMER:

			const newFarmState = {...storeFarmState, orders: [...storeFarmState.orders]};
			const removedOrderIndex = newFarmState.orders.findIndex(order => +order.id === +action.payload.id);

			if (removedOrderIndex !== -1){

				newFarmState.orders.splice(removedOrderIndex, 1);
			}

			return newFarmState;


		/**
		 * Возвращается предыдущее состояние
		 */
		default:
			return storeFarmState;
	}
}
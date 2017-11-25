import ActionTypes from '../actions/actionTypes';// Типы экшенов


const initialState = {
	orders: []
};


export default (storeMarketState = initialState, action) => {

	switch (action.type) {

		/**
		 * Добавление заказа в список
		 */
		case ActionTypes.CREATE_ORDER:

			return {...storeMarketState, orders: [...storeMarketState.orders, action.payload]};


		/**
		 * Удаление заказа из списка
		 */
		case ActionTypes.MOVE_ORDER_TO_FARM:

			const newMarketState = {...storeMarketState, orders: [...storeMarketState.orders]};
			const removedOrderIndex = newMarketState.orders.findIndex(order => +order.id === +action.payload.id);

			if (removedOrderIndex !== -1){

				newMarketState.orders.splice(removedOrderIndex, 1);
			}

			return newMarketState;


		/**
		 * Возвращается предыдущее состояние
		 */
		default:
			return storeMarketState;
	}
}
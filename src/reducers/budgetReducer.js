import ActionTypes from '../actions/actionTypes';// Типы экшенов


const initialState = {
	profit: 0,
	marketExpanse: 0,
	farmExpanse: 0,
	deliveryExpanse: 0
};


export default (storeBudgetState = initialState, action) => {

	switch (action.type) {

		case ActionTypes.CREATE_ORDER:

			return {...storeBudgetState,
				profit: storeBudgetState.profit + action.payload.price,
				marketExpanse: storeBudgetState.marketExpanse + 20
			};


		case ActionTypes.MOVE_ORDER_TO_FARM:

			return {...storeBudgetState,
				farmExpanse: storeBudgetState.farmExpanse + 100
			};


		case ActionTypes.MOVE_ORDER_TO_CUSTOMER:

			return {...storeBudgetState,
				deliveryExpanse: storeBudgetState.deliveryExpanse + 20
			};


		/**
		 * Возвращается предыдущее состояние
		 */
		default:
			return storeBudgetState;
	}
}
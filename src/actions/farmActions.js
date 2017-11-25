import ActionsTypes from './actionTypes';


export function MoveOrderToCustomer(payload) {
	return {
		type: ActionsTypes.MOVE_ORDER_TO_CUSTOMER,
		payload
	}
}
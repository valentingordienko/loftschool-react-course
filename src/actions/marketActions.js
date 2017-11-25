import ActionsTypes from './actionTypes';


export function CreateOrder(payload) {
	return {
		type: ActionsTypes.CREATE_ORDER,
		payload
	}
}

export function MoveOrderToFarm(payload) {

	return {
		type: ActionsTypes.MOVE_ORDER_TO_FARM,
		payload
	}
}
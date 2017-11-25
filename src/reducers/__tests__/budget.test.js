import ActionTypes from '../../actions/actionTypes';// Типы экшенов
import BudgetReducer from '../budgetReducer';//Редюссер маркеа

describe('BudgetReducer', () => {

	it('Экшен с типом CREATE_ORDER увеличивает profit на action.payload.price', () => {
		const nextBudgetState = BudgetReducer({profit: 0}, {type: ActionTypes.CREATE_ORDER, payload: {price: 111}});

		expect(nextBudgetState.profit).toEqual(111);
	});

	it('Экшен с типом CREATE_ORDER увеличивает marketExpanse на 20', () => {
		const nextBudgetState = BudgetReducer({marketExpanse: 0, price: 0}, {type: ActionTypes.CREATE_ORDER, payload: {price: 111}});

		expect(nextBudgetState.marketExpanse).toEqual(20);
	});

	it('Экшен с типом MOVE_ORDER_TO_FARM увеличивает farmExpanse на 100', () => {
		const nextBudgetState = BudgetReducer({farmExpanse: 0}, {type: ActionTypes.MOVE_ORDER_TO_FARM});

		expect(nextBudgetState.farmExpanse).toEqual(100);
	});

  it('Экшен с типом MOVE_ORDER_TO_CUSTOMER увеличивает deliveryExpanse на 20', () => {
    const nextBudgetState = BudgetReducer({deliveryExpanse: 0}, {type: ActionTypes.MOVE_ORDER_TO_CUSTOMER});

    expect(nextBudgetState.deliveryExpanse).toEqual(20);
  });
});

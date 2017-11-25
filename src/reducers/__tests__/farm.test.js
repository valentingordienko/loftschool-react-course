import FarmReducer from '../farmReducer';
import ActionTypes from '../../actions/actionTypes';// Типы экшенов

describe('FarmReducer', () => {

  it('Экшен с типом MOVE_ORDER_TO_FARM добавляет action.payload в orders', () => {
    const nextFarmState = FarmReducer({orders: []}, {type: ActionTypes.MOVE_ORDER_TO_FARM, payload: {name: 'test'}});
    expect([{name: 'test'}]).toEqual(expect.arrayContaining(nextFarmState.orders));
  });

  it('Экшен с типом MOVE_ORDER_TO_CUSTOMER убирает order из orders (поиск по id)', () => {
    const nextFarmState = FarmReducer({orders: [{id: 1}]}, {type: ActionTypes.MOVE_ORDER_TO_CUSTOMER, payload: {id: 1}});
    expect(nextFarmState.orders).toEqual([]);
  });
});

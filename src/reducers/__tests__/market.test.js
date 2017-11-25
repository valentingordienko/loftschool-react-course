import ActionTypes from '../../actions/actionTypes';// Типы экшенов
import MarketReducer from '../marketReducer';//Редюссер маркеа

describe('MarketReducer', () => {

  it('Экшен с типом CREATE_ORDER добавляет action.payload к orders', () => {
    const nextMarketState = MarketReducer({orders:[]}, {type: ActionTypes.CREATE_ORDER, payload: {id: 1}});

    expect([{id: 1}]).toEqual(expect.arrayContaining(nextMarketState.orders));
  });

  it('Экшен с типом MOVE_ORDER_TO_FARM удаляет из orders по action.payload.id', () => {
    const nextMarketState = MarketReducer({orders:[{id: 1}]}, {type: ActionTypes.MOVE_ORDER_TO_FARM, payload: {id: 1}});

    expect(nextMarketState.orders).toEqual([]);
  });
});

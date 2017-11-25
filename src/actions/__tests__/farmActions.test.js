import {MoveOrderToCustomer} from '../farmActions';

describe('Action creator MoveOrderToCustomer', () => {
  it("Должен возвращать правильный action c типом 'MOVE_ORDER_TO_CUSTOMER'", () => {
    expect(MoveOrderToCustomer('test')).toEqual({
      type: 'MOVE_ORDER_TO_CUSTOMER',
      payload: 'test'
    });
  });
});

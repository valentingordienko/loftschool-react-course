import {CreateOrder, MoveOrderToFarm} from '../marketActions';

describe('Action creator CreateOrder', () => {
  it("Должен возвращать правильный action c типом 'CREATE_ORDER'", () => {
    expect(CreateOrder('test')).toEqual({
      type: 'CREATE_ORDER',
      payload: 'test'
    });
  });
});

describe('Action creator MoveOrderToFarm', () => {
  it("Должен возвращать правильный action c типом 'MOVE_ORDER_TO_FARM'", () => {
    expect(MoveOrderToFarm('test')).toEqual({
      type: 'MOVE_ORDER_TO_FARM',
      payload: 'test'
    });
  });
});

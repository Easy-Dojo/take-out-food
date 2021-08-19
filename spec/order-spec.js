const {generateOrderItems} = require("../src/order");
describe('Test Order', function () {

  it('should generate order items when generate order', function () {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let orderItems = generateOrderItems(inputs);
    let expected = [{
      id: 'ITEM0001',
      name: '黄焖鸡',
      count: 1,
      amount: 18.00
    }, {
      id: 'ITEM0013',
      name: '肉夹馍',
      count: 2,
      amount: 12.00
    }, {
      id: 'ITEM0022',
      name: '凉皮',
      count: 1,
      amount: 8.00
    }]
    expect(orderItems).toEqual(expected)
  });
});

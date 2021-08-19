const {discountPromotionCalculate} = require("../src/promotions");
const {fullReductionPromotionCalculate} = require("../src/promotions");
const {calculateBestPromotionAmount} = require("../src/promotions");

describe('Test Promotion', function () {

  it('should return best promotion amount when calculate given order items', function () {

    let orderItems = [{
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
    const result = calculateBestPromotionAmount(orderItems)
    let expected = {
      orderItems: orderItems,
      bestPromotion: {
        promotionType: {
          type: '指定菜品半价',
          items: ['ITEM0001', 'ITEM0022']
        },
        savedAmount: 13
      },
      amount: 25,
    }
    expect(result).toEqual(expected)
  })

  it('should return 6 amount when fullReductionPromotionCalculate given order items', function () {
    let orderItems = [{
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
    const result = fullReductionPromotionCalculate(orderItems)
    let expected = 6
    expect(result.savedAmount).toEqual(expected)
  })

  it('should return 13 amount when discountPromotionCalculate given order items', function () {
    let orderItems = [{
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
    const result = discountPromotionCalculate(orderItems)
    let expected = 13
    expect(result.savedAmount).toEqual(expected)
  })
});

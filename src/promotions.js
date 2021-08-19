function loadPromotions() {
  return [{
    type: '满30减6元'
  }, {
    type: '指定菜品半价',
    items: ['ITEM0001', 'ITEM0022']
  }];
}

function fullReductionPromotionCalculate(orderItems) {
  return {
    savedAmount: getTotalAmount(orderItems) > 30 ? 6 : 0,
    promotionType: {
      type: '满30减6元'
    }
  }
}

function discountPromotionCalculate(orderItems) {
  const promotionItems = ['ITEM0001', 'ITEM0022']
  const needDiscountOrderItems = orderItems.filter(item => promotionItems.includes(item.id))
  let savedAmount = needDiscountOrderItems.reduce((pre, cur) => pre + cur.amount, 0) * 0.5;

  return {
    savedAmount,
    promotionType: {
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022']
    }
  }
}

function getTotalAmount(orderItems) {
  return orderItems.reduce((pre, cur) => pre + cur.amount, 0);
}

const calculateBestPromotionAmount = function (orderItems) {
  const fullReductionPromotion = fullReductionPromotionCalculate(orderItems)
  const discountPromotion = discountPromotionCalculate(orderItems)
  const bestPromotion = fullReductionPromotion.savedAmount > discountPromotion.savedAmount ? fullReductionPromotion : discountPromotion

  return {
    order: orderItems,
    bestPromotion,
    amount: getTotalAmount(orderItems)-bestPromotion.savedAmount
  }
}

module.exports = {calculateBestPromotionAmount, fullReductionPromotionCalculate, discountPromotionCalculate}

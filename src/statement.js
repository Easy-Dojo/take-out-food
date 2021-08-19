const divide = "-----------------------------------"

function getPromotionStr(bestPromotion) {
  if (bestPromotion.savedAmount === 0) {
    return ``
  }
  if (bestPromotion.promotionType.type === '指定菜品半价') {
    return `\n使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省${bestPromotion.savedAmount}元
${divide}`;
  } else {
    return `\n使用优惠:
满30减6元，省6元
${divide}`;
  }
}

function printStatement(order) {
  const header = "============= 订餐明细 ============="

  const orderItemsStr = order.orderItems.reduce((total, cur)=>total+`\n${cur.name} x ${cur.count} = ${cur.amount}元`, "")
  const promotionStr = getPromotionStr(order.bestPromotion)
  const totalAmountStr = `\n总计：${order.amount}元`
  const footer = "==================================="

  return `${header}${orderItemsStr}
${divide}${promotionStr}${totalAmountStr}
${footer}`
}

module.exports = {printStatement}

const {printStatement} = require("./statement");
const {calculateBestPromotionAmount} = require("./promotions");
const {generateOrderItems} = require("./order");

function bestCharge(selectedItems) {
  const orderItems = generateOrderItems(selectedItems);
  const bestPromotionOrder = calculateBestPromotionAmount(orderItems);

  return printStatement(bestPromotionOrder)
}

module.exports = {bestCharge}

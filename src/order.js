const {loadAllItems} = require("./items");

const productItems = loadAllItems();

function generateOrderItem(selectedItem) {
  let splitItem = selectedItem.split(" x ");
  const id = splitItem[0]
  const count = parseInt(splitItem[1])
  const productItem = productItems.find(item => item.id === id);
  return {
    id,
    name: productItem.name,
    count,
    amount: productItem.price * count
  }
}

function generateOrderItems(selectedItems) {
  return selectedItems.map(selectedItem=>generateOrderItem(selectedItem))
}

module.exports = {generateOrderItems}

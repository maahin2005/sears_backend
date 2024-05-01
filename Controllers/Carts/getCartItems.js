const CartModel = require("../../Models/Cart");

const getCartItems = async (req, res) => {
  try {
    const items = await CartModel.find();

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCartItems;

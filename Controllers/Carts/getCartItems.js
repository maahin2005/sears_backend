const CartModel = require("../../Models/Cart");

const getCartItems = async (req, res) => {
  const { userId } = req.body;

  try {
    const items = await CartModel.find({ userId });

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCartItems;

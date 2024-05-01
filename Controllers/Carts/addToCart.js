const CartModel = require("../../Models/Cart");

const addToCart = async (req, res) => {
  const { userId, quantity } = req.body;
  const { productId } = req.params;

  try {
    const existingCartItem = await CartModel.findOne({ userId, productId });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      return await existingCartItem.save();
    }

    await CartItem.create({ userId, productId, quantity });

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addToCart;

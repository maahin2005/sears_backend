const CartModel = require("../../Models/Cart");

const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  try {
    const cartItem = await CartModel.findOne({ productId });

    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await CartModel.findByIdAndDelete(cartItem._id);

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = removeFromCart;

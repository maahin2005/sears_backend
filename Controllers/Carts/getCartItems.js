const CartModel = require("../../Models/Cart");
const ProductModel = require("../../Models/Products");

const getCartItems = async (req, res) => {
  const { userId } = req.body;

  try {
    const items = await CartModel.find({ userId });

    if (!items.length) {
      return res.json({ message: "No items in the cart", total: 0 });
    }

    // Extract all productIds from items
    const productIds = items.map((item) => item.productId);

    // Query the ProductModel to get product prices
    const products = await ProductModel.find({ _id: { $in: productIds } });

    // Create a map of productId to price for quick lookup
    const productPriceMap = products.reduce((acc, product) => {
      acc[product._id] = product.price;
      return acc;
    }, {});

    // Calculate the total price
    const total = items.reduce((sum, item) => {
      return sum + (productPriceMap[item.productId] || 0) * item.quantity; // Use item.quantity if it's available
    }, 0);

    res.json({ items, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCartItems;

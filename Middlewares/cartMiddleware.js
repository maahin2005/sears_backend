const ProductModel = require("../Models/Products");

const cartMiddleware = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await ProductModel.findOne({ _id: productId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = cartMiddleware;

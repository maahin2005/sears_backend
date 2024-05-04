const ProductModel = require("../../Models/Products");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find(req.query);

    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;

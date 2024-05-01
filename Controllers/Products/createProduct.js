const ProductModel = require("../../Models/Products");

const createProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);

    await newProduct.save();

    res.status(201).json({ msg: "Product saved successfully", newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createProduct;

const ProductModel = require("../../Models/Products");

const getCategories = async (req, res) => {
  try {
    const products = await ProductModel.find();
    let categories = [];
    let tags = [];

    products.forEach((product) => {
      categories.push(product.category);
      tags.push(product.tags);
    });

    categories = [...new Set(categories)];
    tags = [...new Set(tags)];

    res.json({ categories, tags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCategories;

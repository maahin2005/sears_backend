const ProductModel = require("../../Models/Products");

const getProducts = async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page || 1;
  const skipping = limit * (page - 1);
  const query = req.query;
  let API_URL = ProductModel.find(query);

  if (req.query.page || req.query.limit) {
    API_URL = ProductModel.find();
  }
  try {
    const allProducts = await ProductModel.find();
    const totalProducts = allProducts.length;
    const products = await API_URL.skip(skipping).limit(limit);
    const totalPages = Math.ceil(totalProducts / limit) || 1;

    res.json({
      totalProducts,
      currentPage: +page,
      totalPages,
      productsPerPage: +limit || +products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;

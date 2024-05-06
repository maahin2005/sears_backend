const ProductModel = require("../../Models/Products");

// const getProducts = async (req, res) => {
//   const limit = req.query.limit;
//   const page = req.query.page || 1;
//   const skipping = limit * (page - 1);
//   const query = req.query;
//   let API_URL = ProductModel.find(query);

//   if (req.query.page || req.query.limit) {
//     API_URL = ProductModel.find();
//   }
//   try {
//     const allProducts = await ProductModel.find();
//     const totalProducts = allProducts.length;
//     const products = await API_URL.skip(skipping).limit(limit);
//     const totalPages = Math.ceil(totalProducts / limit) || 1;

//     res.json({
//       totalProducts,
//       currentPage: +page,
//       totalPages,
//       productsPerPage: +limit || +products.length,
//       data: products,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = getProducts;

// ------------------------------------------------------------------

const getProducts = async (req, res) => {
  const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.page) || 1;
  const skipping = limit * (page - 1);
  const searchTerm = req.query.search;

  const singleQuery = req.query;

  let query = {};

  // Check if search query is present in request
  if (searchTerm) {
    query.$or = [
      { tags: { $regex: searchTerm, $options: "i" } }, // Match tags containing the search term (case-insensitive)
      { category: { $regex: searchTerm, $options: "i" } }, // Match category containing the search term (case-insensitive)
      { title: { $regex: searchTerm, $options: "i" } }, // Match title containing the search term (case-insensitive)
      { description: { $regex: searchTerm, $options: "i" } }, // Match description containing the search term (case-insensitive)
    ];
  }

  if (req.query.category) {
    query.category = req.query.category;
  }

  // Filter by price range
  if (req.query.minPrice && req.query.maxPrice) {
    query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
  }

  let API_URL = ProductModel.find(query);

  if (req.query.page || req.query.limit) {
    API_URL.skip(skipping).limit(limit);
  }
  if (Object.keys(singleQuery).length > 0 && Object.keys(query).length === 0) {
    API_URL = ProductModel.find(singleQuery);
  }

  try {
    const allProducts = await ProductModel.find(query);
    const products = await API_URL;
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit) || 1;

    res.json({
      totalProducts,
      currentPage: page,
      totalPages,
      productsPerPage: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;

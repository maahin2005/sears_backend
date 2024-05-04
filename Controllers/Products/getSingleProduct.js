const ProductModel = require("../../Models/Products");

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findOne({ _id: id });

    res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSingleProduct;

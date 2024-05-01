const { Router } = require("express");
const getProducts = require("../Controllers/Products/getProducts");
const createProduct = require("../Controllers/Products/createProduct");

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);

module.exports = productRoutes;

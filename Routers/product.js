const { Router } = require("express");
const getProducts = require("../Controllers/Products/getProducts");
const createProduct = require("../Controllers/Products/createProduct");
const getSingleProduct = require("../Controllers/Products/getSingleProduct");
const getCategories = require("../Controllers/Products/getCategories");

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.get("/categories", getCategories);
productRoutes.get("/:id", getSingleProduct);
productRoutes.post("/", createProduct);

module.exports = productRoutes;

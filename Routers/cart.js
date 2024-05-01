const { Router } = require("express");
const getCartItems = require("../Controllers/Carts/getCartItems");
const addToCart = require("../Controllers/Carts/addToCart");
const removeFromCart = require("../Controllers/Carts/removeFromCart");
const userAuth = require("../Middlewares/auth");

const cartRoutes = Router();

cartRoutes.get("/", userAuth, getCartItems);
cartRoutes.post("/add/:productId", userAuth, addToCart);
cartRoutes.delete("/remove/:productId", userAuth, removeFromCart);

module.exports = cartRoutes;

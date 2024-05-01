const { Router } = require("express");
const getUsers = require("../Controllers/Users/getUsers");
const registerUser = require("../Controllers/Users/registerUser");
const loginUser = require("../Controllers/Users/loginUser");

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

module.exports = userRoutes;

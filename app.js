const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./Routers/user");
const productRoutes = require("./Routers/product");
const cartRoutes = require("./Routers/cart");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/", (_, res) => {
  res.send("API Initializing");
});

app.listen(PORT, async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    console.log(`Server is listening on ${PORT} and DB is connected`);
  } catch (error) {
    console.log(error.message);
  }
});

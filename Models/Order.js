const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
      // Add more fields as needed
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: { type: String },
  // Add more fields as needed
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;

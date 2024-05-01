const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipcode: { type: Number, required: true },
  // cartItem: [{ type: String }],
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    res.status(200).json({ message: "User login successfully", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;

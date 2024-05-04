const jwt = require("jsonwebtoken");
require("dotenv").config();

const userAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token Not Provided" });
  }

  try {
    const decodedMSG = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decodedMSG);

    req.body.userId = decodedMSG.userId;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = userAuth;

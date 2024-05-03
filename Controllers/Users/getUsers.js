const UserModel = require("../../Models/User");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find(req.query);

    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUsers;

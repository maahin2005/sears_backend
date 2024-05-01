const UserModel = require("../../Models/User");

const getUsers = async (_, res) => {
  try {
    const users = await UserModel.find();

    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUsers;

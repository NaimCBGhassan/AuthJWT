import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("roles");

    const usersData = users.map((el) => {
      const userData = {
        username: el.username,
        email: el.email,
        roles: el.roles.map((el) => el.name),
      };
      return userData;
    });

    return res.status(200).json(usersData);
  } catch (error) {
    return res.status(500).json({ msg: "The users was not founded" });
  }
};
export const createUser = async (req, res) => {
  res.send("Creating user");
};

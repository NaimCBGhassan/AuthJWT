import { foundedEmail, foundedUsername, setRoles } from "../libs/validations.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("roles");

    const usersData = users.map((el) => {
      const userData = {
        id: el._id,
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

export const getUser = async (req, res) => {
  try {
    let { _id, username, email, roles } = await User.findById({ _id: req.userId }).populate("roles");

    roles = roles.map((el) => el.name);

    return res.status(200).json({ _id, username, email, roles });
  } catch (error) {
    return res.status(500).json({ msg: "The user was not founded" });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body;

  if (await foundedUsername(username)) return res.status(400).json({ token: null, msg: "Username alredy exist" });

  if (await foundedEmail(email)) return res.status(400).json({ token: null, msg: "Email alredy exist" });

  let newUser = await new User({
    username,
    email,
    password: await User.hashPassword(password),
  });

  newUser = await setRoles(newUser, roles);

  const savedUser = await newUser.save();

  res.status(200).json({ savedUser });
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;

    let { username, email, password, roles } = req.body;

    if (await foundedUsername(username)) return res.status(400).json({ token: null, msg: "Username alredy exist" });

    if (await foundedEmail(email)) return res.status(400).json({ token: null, msg: "Email alredy exist" });

    if (password) password = await User.hashPassword(password);

    let updateUser = { username, email, password, roles };

    if (roles) updateUser = await setRoles({ username, email, password }, roles);

    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, updateUser, { new: true });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete({ _id: userId });

    return res.status(204).json({});
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};

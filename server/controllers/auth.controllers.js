import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const foundUsername = await User.find({ username });
    if (!(foundUsername.length === 0)) return res.status(400).json({ token: null, msg: "Username alredy exist" });

    const foundEmail = await User.find({ email });
    if (!(foundEmail.length === 0)) return res.status(400).json({ token: null, msg: "Email alredy exist" });

    const newUser = await new User({
      username,
      email,
      password: await User.hashPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
      expiresIn: 24 * 60 * 60,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const foundUser = await User.findOne({ username });
    console.log(foundUser);
    if (!foundUser) return res.status(400).json({ token: null, msg: "User doesn`t exist" });

    const chechkPassword = await User.comparePassword(password, foundUser.password);

    if (!chechkPassword) return res.status(400).json({ token: null, msg: "Incorrect password" });

    const token = jwt.sign({ id: foundUser._id }, SECRET_JWT, {
      expiresIn: 24 * 60 * 60,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

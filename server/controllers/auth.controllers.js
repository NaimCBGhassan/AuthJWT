import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const users = await User.find({ email });

  const newUser = await new User({
    username,
    email,
    password: await User.hashPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.find({ name: "user" });
    newUser.role = [role._id];
  }

  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
    expiresIn: 24 * 60 * 60,
  });

  res.json({ token });
};

export const signIn = async (req, res) => {
  res.json({ signUp: "SignUp" });
};

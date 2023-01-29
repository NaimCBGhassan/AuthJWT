import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const foundUsername = await User.find({ username });
    if (!(foundUsername.length === 0)) return res.json({ msg: "Username alredy exist" });

    const foundEmail = await User.find({ email });
    if (!(foundEmail.length === 0)) return res.json({ msg: "Email alredy exist" });

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
      role[0]._id;
      newUser.roles = [role[0]._id];
    }

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
      expiresIn: 24 * 60 * 60,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Fallo en la solicitud" });
  }
};

export const signIn = async (req, res) => {
  res.json({ signUp: "SignUp" });
};

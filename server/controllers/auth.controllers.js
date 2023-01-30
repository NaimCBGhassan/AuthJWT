import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config.js";
import User from "../models/User.js";
import { foundedEmail, foundedUsername, setRoles } from "../libs/validations.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (await foundedUsername(username)) return res.status(400).json({ token: null, msg: "Username alredy exist" });

    if (await foundedEmail(email)) return res.status(400).json({ token: null, msg: "Email alredy exist" });

    let newUser = await new User({
      username,
      email,
      password: await User.hashPassword(password),
      roles: "user",
    });

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

    const foundUsername = await foundedUsername(username);
    if (!foundUsername) return res.status(400).json({ token: null, msg: "User doesn`t exist" });

    const chechkPassword = await User.comparePassword(password, foundUsername.password);
    if (!chechkPassword) return res.status(400).json({ token: null, msg: "Incorrect password" });

    const token = jwt.sign({ id: foundUsername._id }, SECRET_JWT, {
      expiresIn: 24 * 60 * 60,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

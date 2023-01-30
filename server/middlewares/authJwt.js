import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config.js";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) return res.status(403).json({ msg: "No token provided" });

    const decoded = await jwt.verify(token, SECRET_JWT);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });

    if (!user) return res.status(404).json({ msg: "User does not exist" });

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

export const isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate("roles");

    //The logic here is that Admin can do all of thing that the moderator can do.

    const isModerator = user.roles.some((el) => el.name === "moderator");

    if (!isModerator) return res.status(403).json({ msg: "The user dosen`t have permissions" });

    next();
  } catch (error) {
    return res.status(404);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate("roles");

    const isAdmin = user.roles.some((el) => el.name === "admin");

    if (!isAdmin) return res.status(403).json({ msg: "The user dosen`t have permissions" });

    next();
  } catch (error) {
    return res.status(404);
  }
};

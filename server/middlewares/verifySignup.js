import { ROLES } from "../models/Role.js";

export const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles.length === 0) return next();

  if (req.body.roles.some((el) => ROLES.includes(el))) return next();

  req.body.roles.forEach((el) => {
    return res.status(400).json({ msg: `Role ${el} does not exists` });
  });
};

import { ROLES } from "../models/Role.js";

export const checkRolesExisted = async (req, res, next) => {
  if (!req.body.roles || req.body.roles.length === 0) return next();

  if (req.body.roles.every((el) => ROLES.includes(el))) return next();

  const arrayMsg = [];

  req.body.roles.forEach((el) => {
    if (!ROLES.includes(el)) arrayMsg.push({ msg: `Role ${el} does not exists` });
  });

  return res.status(400).json(arrayMsg);
};

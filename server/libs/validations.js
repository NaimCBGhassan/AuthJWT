import User from "../models/User.js";
import Role from "../models/Role.js";

export const foundedUsername = async (username) => {
  return await User.findOne({ username });
};

export const foundedEmail = async (email) => {
  return await User.findOne({ email });
};

export const setRoles = async (user, roles) => {
  if (roles && roles.length !== 0) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    user.roles = foundRoles.map((role) => role._id);
    return user;
  } else {
    const role = await Role.findOne({ name: "user" });
    user.roles = [role._id];
    return user;
  }
};

import { Router } from "express";
import { createUser, deleteUser, getUsers, getUser, updateUser } from "../controllers/user.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt.js";
import { checkRolesExisted } from "../middlewares/verifySignup.js";

const userRouter = Router();

userRouter.get("/", [verifyToken, isModerator], getUsers);
userRouter.get("/user", [verifyToken], getUser);
userRouter.post("/", [verifyToken, isAdmin, checkRolesExisted], createUser);
userRouter.put("/:userId", [verifyToken, isModerator, checkRolesExisted], updateUser);
userRouter.delete("/:userId", [verifyToken, isAdmin], deleteUser);

export { userRouter };

import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt.js";

const userRouter = Router();

userRouter.get("/", [verifyToken, isModerator], getUsers);
userRouter.post("/", [verifyToken, isAdmin], createUser);

export { userRouter };

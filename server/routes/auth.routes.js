import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { checkRolesExisted } from "../middlewares/verifySignup.js";

const authRouter = Router();

authRouter.post("/signup", checkRolesExisted, signUp);
authRouter.post("/signin", signIn);

export { authRouter };

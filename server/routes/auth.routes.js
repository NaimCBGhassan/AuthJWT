import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup");
authRouter.post("/signin");

export { authRouter };

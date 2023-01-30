import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authRouter, productsRouter, userRouter } from "./routes/index.js";
import { ROOT } from "./config.js";
import { createRoles } from "./libs/initialSetUp.js";

const app = express();
createRoles();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes

app.get("/", (req, res) => res.json(ROOT));

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

export default app;

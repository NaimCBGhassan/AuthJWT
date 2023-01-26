import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authRouter, productsRouter, userRouter } from "./routes/index.js";
import { ROOT } from "./config.js";

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes

app.get("/", (req, res) => res.json(ROOT));

app.use("/products", productsRouter);

export default app;

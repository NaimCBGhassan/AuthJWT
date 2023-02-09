import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authRouter, productsRouter, userRouter } from "./routes/index.js";
import { ROOT } from "./config.js";
import { createRoles } from "./libs/initialSetUp.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
createRoles();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Frontend
app.use(express.static(join(__dirname, "../client/dist")));

//routes

app.get("/api", (req, res) => res.json(ROOT));

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.use((req, res, next) => {
  res.sendFile(join(__dirname, "../client/dist/index.html"));
});

export default app;

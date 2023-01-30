import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt.js";

const productsRouter = Router();

productsRouter.get("/", productsCtrl.getProducts);

productsRouter.get("/:productId", productsCtrl.getProductsById);

productsRouter.post("/", [verifyToken, isAdmin], productsCtrl.createProducts);

productsRouter.put("/:productId", [verifyToken, isModerator], productsCtrl.updateProducts);

productsRouter.delete("/:productId", [verifyToken, isAdmin], productsCtrl.deleteProducts);

export { productsRouter };

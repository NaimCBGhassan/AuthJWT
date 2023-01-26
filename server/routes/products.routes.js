import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", productsCtrl.getProducts);

productsRouter.get("/:productId", productsCtrl.getProductsById);

productsRouter.post("/", productsCtrl.createProducts);

productsRouter.put("/:productId", productsCtrl.updateProducts);

productsRouter.delete("/:productId", productsCtrl.deleteProducts);

export { productsRouter };

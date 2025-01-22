import express from "express";
import productController from "../controllers/productsController";

export const router = express.Router();

router.get("/", productController.readAll);
router.post("/", productController.create);

router
  .route("/id")
  .get(productController.readOne)
  .put(productController.updateOne)
  .delete(productController.deleteOne);

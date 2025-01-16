import express from "express";
import userController from "../controllers/userController";

export const router = express.Router();

router.get("/", userController.readAll);
router.post("/", userController.create);

router
  .route("/:id")
  .get(userController.readOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

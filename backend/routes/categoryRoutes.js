import express from "express";
import {
  getCategories,
  getCategoryById,
  getProductByCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(getCategories);

router.route("/products/:id").get(getProductByCategory);

router.route("/:id").get(getCategoryById);

export default router;

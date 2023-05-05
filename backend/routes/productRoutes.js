import express from "express";
import {
  getProducts,
  getProductById,
  getTopProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/top").get(getTopProducts);

router.route("/:id").get(getProductById);

export default router;

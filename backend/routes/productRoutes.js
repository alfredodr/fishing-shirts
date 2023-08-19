import express from "express";
import {
  getAllProducts,
  getProducts,
  getProductById,
  getTop30Products,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/all").get(getAllProducts);

router.route("/top").get(getTop30Products);

router.route("/:id").get(getProductById);

export default router;

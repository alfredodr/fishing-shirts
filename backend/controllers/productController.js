import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  //pagination
  const pageSize = req.query.pageSize || 10;
  const page = Number(req.query.pageNumber) || 1;

  //search
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments(keyword);

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  const pages = Math.ceil(count / pageSize);

  if (products) {
    res.json({ products, page, pages });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Fetch single product
// @route  GET /api/products/:slug
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.id });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Get top products
// @route GET /api/products/top
// @access Public
const getTop30Products = asyncHandler(async (req, res) => {
  const products = await Product.find().limit(30); //sort in ascending order

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Top 30 products not found");
  }
});

export { getProducts, getProductById, getTop30Products };

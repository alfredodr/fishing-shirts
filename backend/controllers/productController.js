import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route  GET /api/products/all
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  //pagination
  const pageSize = req.query.pageSize || 25;
  const page = Number(req.query.pageNumber) || 1;

  const products = await Product.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (products) {
    res.json({ products });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Fetch all available products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  //pagination
  const pageSize = req.query.pageSize || 25;
  const page = Number(req.query.pageNumber) || 1;
  const sortBy = req.query.sortBy || "name_asc";

  //search
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  // Price range
  const minPrice = req.query.min ? Number(req.query.min) : 0;
  const maxPrice = req.query.max ? Number(req.query.max) : 1000;

  //brands filter
  const { brands } = req.query; // Expecting a comma-separated list of brands
  let brandFilter = {};
  if (brands) {
    const brandArray = brands
      .split(",")
      .map((brand) => new RegExp(brand.trim(), "i")); // Case-insensitive regex
    brandFilter.brand = { $in: brandArray };
  }

  // Fetch unique brand names
  const uniqueBrands = await Product.distinct("brand", {
    ...keyword,
    price: { $gte: minPrice, $lte: maxPrice, $ne: 1 },
  });

  //count total products matching filters excluding pagination
  let count = await Product.countDocuments({
    ...keyword,
    ...brandFilter,
    price: { $gte: minPrice, $lte: maxPrice, $ne: 1 },
  });

  //sort
  const sortOptions = {};
  if (sortBy === "") {
    null;
  } else if (sortBy === "price_asc") {
    sortOptions.price = 1;
  } else if (sortBy === "price_desc") {
    sortOptions.price = -1;
  } else if (sortBy === "name_asc") {
    sortOptions.name = 1;
  } else if (sortBy === "name_desc") {
    sortOptions.name = -1;
  }

  // Get products with pagination
  const products = await Product.find({
    ...keyword,
    ...brandFilter,
    price: { $gte: minPrice, $lte: maxPrice, $ne: 1 },
  })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort(sortOptions);

  // Calculate total pages
  const pages = Math.ceil(count / pageSize);

  // Calculate start and end range for current page
  let startRange = (page - 1) * pageSize + 1;
  let endRange = Math.min(page * pageSize, count);

  if (products) {
    res.json({
      products,
      uniqueBrands,
      page,
      pages,
      startRange,
      endRange,
      count,
    });
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

// @desc Get top 30 products
// @route GET /api/products/top
// @access Public
const getTop30Products = asyncHandler(async (req, res) => {
  const products = await Product.find({ price: { $ne: 1 } }).limit(30); //sort in ascending order

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Top 30 products not found");
  }
});

export { getAllProducts, getProducts, getProductById, getTop30Products };

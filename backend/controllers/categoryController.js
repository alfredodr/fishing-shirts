import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc Fetch all categories
// @route  GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
});

// @desc Fetch single category
// @route  GET /api/categories/:id
// @access Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc Get available product by category
// @route GET /api/categories/products/:name
// @access Public
const getProductByCategory = asyncHandler(async (req, res) => {
  //pagination
  const pageSize = req.query.pageSize || 25;
  const page = Number(req.query.pageNumber) || 1;
  const sortBy = req.query.sortBy || "name_asc";

  //sort
  const sortOptions = {};
  if (sortBy === "price_asc") {
    sortOptions.price = 1;
  } else if (sortBy === "price_desc") {
    sortOptions.price = -1;
  } else if (sortBy === "name_asc") {
    sortOptions.name = 1;
  } else if (sortBy === "name_desc") {
    sortOptions.name = -1;
  }

  // Price range
  const minPrice = req.query.min ? Number(req.query.min) : 0;
  const maxPrice = req.query.max ? Number(req.query.max) : 1000;

  const categoryId = req.params.id;

  const category = await Category.findById(categoryId);

  //brands filter
  const { brands } = req.query; // Expecting a comma-separated list of brands
  let brandFilter = {};
  if (brands) {
    const brandArray = brands
      .split(",")
      .map((brand) => new RegExp(brand.trim(), "i")); // Case-insensitive regex
    brandFilter.brand = { $in: brandArray };
  }

  const products = await Category.aggregate([
    {
      $match: { _id: categoryId }, // filter by the specified category ID
    },
    {
      $lookup: {
        from: "products",
        localField: "products._id",
        foreignField: "_id",
        as: "productsByCategory",
      },
    },
    {
      $project: {
        _id: 0,
        productsByCategory: 1,
        count: { $size: "$productsByCategory" },
      },
    },
    {
      $unwind: "$productsByCategory",
    },
    {
      $replaceRoot: {
        newRoot: "$productsByCategory",
      },
    },
    {
      $match: { price: { $gte: minPrice, $lte: maxPrice, $ne: 1 } },
    },
    {
      $match: { ...brandFilter },
    },
    {
      $sort: sortOptions,
    },
    {
      $skip: pageSize * (page - 1),
    },
    {
      $limit: pageSize,
    },
  ]);

  const currentBrands = await Category.aggregate([
    {
      $match: { _id: categoryId }, // Match the specified category
    },
    {
      $lookup: {
        from: "products", // Join with products collection
        localField: "products._id", // products._id is an array of product IDs in the category document
        foreignField: "_id", // Match against product IDs
        as: "productsByCategory",
      },
    },
    {
      $unwind: "$productsByCategory", // Deconstruct the array
    },
    {
      $match: {
        "productsByCategory.price": { $gte: minPrice, $lte: maxPrice, $ne: 1 }, // Apply price filter
      },
    },
    {
      $project: {
        _id: 0,
        brand: "$productsByCategory.brand", // Only project the brand field
      },
    },
    {
      $group: {
        // Optional: Group to eliminate duplicates
        _id: null,
        uniqueBrands: { $addToSet: "$brand" },
      },
    },
    {
      $unwind: "$uniqueBrands", // Unwind the uniqueBrands to apply sorting
    },
    {
      $sort: { uniqueBrands: 1 }, // Sort brands alphabetically
    },
    {
      $skip: pageSize * (page - 1), // Pagination
    },
    {
      $group: {
        // Group again to combine the brands back into a set
        _id: null,
        uniqueBrands: { $push: "$uniqueBrands" },
      },
    },
  ]);

  // Count aggregation pipeline (excluding $skip and $limit)
  const countPipeline = [
    {
      $match: { _id: categoryId },
    },
    {
      $lookup: {
        from: "products",
        localField: "products._id",
        foreignField: "_id",
        as: "productsByCategory",
      },
    },
    {
      $unwind: "$productsByCategory",
    },
    {
      $match: {
        "productsByCategory.price": { $gte: minPrice, $lte: maxPrice, $ne: 1 },
        ...(brands ? { "productsByCategory.brand": brandFilter.brand } : {}),
      },
    },
    {
      $count: "total",
    },
  ];

  const countResult = await Category.aggregate(countPipeline);
  const totalProducts = countResult.length > 0 ? countResult[0].total : 0;

  if (category && products) {
    const pages = Math.ceil(totalProducts / pageSize);

    res.json({
      products,
      page,
      pages,
      count: totalProducts,
      uniqueBrands:
        currentBrands.length > 0 ? currentBrands[0].uniqueBrands : [],
    });
  } else {
    res.status(404).json({ message: "No products found." });
  }
});

export { getCategories, getCategoryById, getProductByCategory };

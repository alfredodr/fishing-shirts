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
  const pageSize = req.query.pageSize || 10;
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

  const categoryId = req.params.id;

  const category = await Category.findById(categoryId);

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
      $match: { price: { $ne: 1 } },
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

  if (category && products) {
    const count = category.count;

    const pages = Math.ceil(count / pageSize);

    res.json({ products, page, pages });
  } else {
    res
      .status(404)
      .json({ message: "No products found for the specified category" });
  }
});

export { getCategories, getCategoryById, getProductByCategory };

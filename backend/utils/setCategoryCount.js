import * as dotenv from "dotenv";
import connectDB from "../config/db.js";
import mongoose from "mongoose";
import colors from "colors";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

dotenv.config();

connectDB();

//set count of available products per category after inserting all products and categories
const setCategoryCounts = async () => {
  try {
    const products = await Product.find({ price: { $ne: 1 } });
    const categoryCounts = [];

    products.forEach((product) => {
      const categories = product.categories;
      categories.forEach((category) => {
        const categoryId = category._id.toString();
        categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1; //count the number of available products in each category
      });
    });

    for (const categoryId of Object.keys(categoryCounts)) {
      const category = await Category.findOne({ _id: categoryId });
      if (category) {
        category.count = categoryCounts[categoryId];
        await category.save();
      }
    }

    console.log("Category counts updated successfully.");
    process.exit(1);
  } catch (error) {
    console.error("Error updating category counts:", error);
    process.exit(1);
  }
};

setCategoryCounts();

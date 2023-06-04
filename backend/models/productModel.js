import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    _id: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    externalUrl: {
      type: String,
      required: true,
    },
    images: [
      {
        src: { type: String, required: true },
        alt: { type: String, required: true },
      },
    ],
    description: {
      type: [String],
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    categories: [{ type: Object, ref: "Category" }],
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//update the product count per category after inserting one product
productSchema.post("save", async (doc, next) => {
  try {
    const categoryCounts = [];
    let categoryId = "";

    const categories = doc.categories; // get the categories from the saved document
    categories.forEach((category) => {
      categoryId = category._id;
      categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1;
    });

    for (const categoryId in categoryCounts) {
      const category = await mongoose
        .model("Category")
        .findOne({ _id: categoryId });
      if (category) {
        await mongoose
          .model("Category")
          .updateOne(
            { _id: categoryId },
            { count: categoryCounts[categoryId] }
          );
      }
    }
    next();
  } catch (error) {
    console.error("Error updating category counts:", error);
    next(error);
  }
});

productSchema.post("insertMany", async (docs, next) => {
  try {
    const categoryCounts = {};

    // Retrieve the current count of products per category
    const categories = await mongoose.model("Category").find({});
    categories.forEach((category) => {
      categoryCounts[category._id] = category.count || 0;
    });

    // Update the count of available product per category
    docs.forEach((doc) => {
      const categories = doc.categories;
      categories.forEach((category) => {
        const categoryId = category._id; // Get the category id
        if (doc.price !== 1) {
          // Check if the price is not 1
          categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1; // Increment the count of products in each category
        }
      });
    });

    // Update the counts in the corresponding categories
    for (const categoryId in categoryCounts) {
      await mongoose
        .model("Category")
        .updateOne({ _id: categoryId }, { count: categoryCounts[categoryId] });
    }

    next();
  } catch (error) {
    console.error("Error updating category counts:", error);
    next(error);
  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;

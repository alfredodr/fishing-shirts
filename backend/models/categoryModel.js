import mongoose, { Schema } from "mongoose";

const categorySchema = mongoose.Schema(
  {
    _id: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
    count: {
      type: Number,
      Required: true,
      default: 0,
    },
    products: [
      {
        type: Object,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;

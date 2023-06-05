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

const Product = mongoose.model("Product", productSchema);

export default Product;

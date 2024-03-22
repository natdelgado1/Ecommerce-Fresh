const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  talla: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: [String],
      required: [true, "title is required"],
    },
    marca: {
      type: String,
      required: [true, "Marca is required"],
    },

    images: {
      type: Number,
      required: [true, "Image URL is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    colors: {
      type: [String],
      required: [true, "Color is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    stocks: [stockSchema],
  },
  { timestamps: true, versionKey: false }
);

const Product = new mongoose.model("Product", ProductSchema);

module.exports = Product;



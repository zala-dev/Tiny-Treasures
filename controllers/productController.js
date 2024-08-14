import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (!products) {
    throw new Error("Products not found");
  }

  res.json(products);
});

// @desc    Get single product
// @route   GET /api/product/:id
// @access  Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  res.json(product);
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  res.send("Create A Product");
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  res.send("Update A Product");
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  res.send("Delete A Product");
});

// @desc    Create new reivew
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  res.send("Create A Product Review");
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  res.send("Get A Top Products");
});

export {
  getProducts,
  getSingleProduct,
  getTopProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
};

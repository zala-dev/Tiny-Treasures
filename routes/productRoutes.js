import express from "express";

import {
  getProducts,
  getSingleProduct,
  getTopProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id/reviews").post(createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;

import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from "express";
import morgan from "morgan";
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorHandler.js";

import productRoutes from "./routes/productRoutes.js";

const PORT = process.env.PORT || 5001;

const app = express();

dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.use(notFoundMiddleware, errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Database connected on port: ${PORT}`);
});

import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorHandler.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Database connected on port: ${PORT}`);
});

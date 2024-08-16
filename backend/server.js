import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/errorHandler.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to Tiny Treasures");
  });
}

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Database connected on port: ${PORT}`);
});

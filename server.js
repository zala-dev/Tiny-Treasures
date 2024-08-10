import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from "express";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 5001;

dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Tiny Treasures");
});

app.listen(PORT, () => {
  console.log(`Database connected on port: ${PORT}`);
});

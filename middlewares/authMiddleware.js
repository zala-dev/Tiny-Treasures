import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  //   console.log("Token: ", token);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   console.log("Decoded UserId:", decoded.userId)

      req.user = await User.findById(decoded.userId).select("-password");

      //   console.log("Decoded User:", req.user)

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };

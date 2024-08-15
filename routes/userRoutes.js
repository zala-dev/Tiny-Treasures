import express from "express";
import {
  registerUser,
  getUsers,
  logoutUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;

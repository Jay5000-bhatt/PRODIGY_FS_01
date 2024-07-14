const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { validateRegister } = require("../middlewares/validatorMiddleware");
const {
  registerUser,
  authUser,
  getUserProfile,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);

module.exports = router;

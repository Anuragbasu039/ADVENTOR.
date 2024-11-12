const express = require("express");
const { Signup, SignIn, Logout } = require("../../controllers/auth/auth-controller");

const router = express.Router();

// User signup
router.post("/signup", Signup);

// User sign-in
router.post("/signin", SignIn);

// User logout
router.post("/logout", Logout);

module.exports = router;

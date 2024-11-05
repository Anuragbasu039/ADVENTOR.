const express = require("express");
const { Signup, SignIn, googleLogin } = require("../../controllers/auth/auth-controller");
const passport = require("passport");
const router = express.Router();

// User signup
router.post("/signup", Signup);

// User sign-in
router.post("/signin", SignIn);

// Google authentication route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google callback route
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "http://localhost:5173/login", // Redirect to login page on failure
        session: false,
    }),
    (req, res) => {
        // Successful authentication, redirect to home or handle token
        res.redirect("http://localhost:5173/home"); // Change URL to your frontend’s home page
    }
);


module.exports = router;

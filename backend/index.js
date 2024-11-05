// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authRouter = require("./routes/auth/auth-routes");
const contact = require("./routes/contact/contact")
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 8000;

// CORS Configuration
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || "default_secret", // Use environment variable for production
    resave: false,
    saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/api/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        if (!profile || !profile.emails || !profile.emails.length) {
            return done(null, false, { message: "No email found in Google profile" });
        }
        const user = {
            id: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
        };
        done(null, user);
    } catch (err) {
        done(err, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

// JSON parsing middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api", contact)

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

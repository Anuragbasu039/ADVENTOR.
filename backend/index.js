// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
const session = require("express-session");

const authRouter = require("./routes/auth/auth-routes");
const contact = require("./routes/contact/contact")
const register = require("./routes/registerform/register")
const details = require("./routes/detailform/detailfrom")
// const orderRoutes = require("./routes/orders/order");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 8000;

// CORS Configuration
app.use(cors({
    origin: ["http://localhost:5173","https://adventor-sigma.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
}));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || "default_secret", // Use environment variable for production
    resave: false,
    saveUninitialized: true,
}));







// JSON parsing middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api", contact)
app.use("/api/form", register)
app.use("/api/details", details)
// app.use(bodyParser.json());
// app.use("/api/orders", orderRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

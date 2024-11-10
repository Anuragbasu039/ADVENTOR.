const User = require("../../models/User"); // Import the User model
const bcrypt = require("bcryptjs"); // Import bcrypt for hashing passwords
const jwt = require("jsonwebtoken"); // Import jsonwebtoken for generating tokens

// SignUp
const Signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.json({
                success: false,
                message: "User already exists, please try again",
            });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 6);
        const newUser = new User({ email, password: hashPassword });

        // Save the new user
        await newUser.save();
        res.status(200).json({ success: true, message: "SignUp Successful" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Some error occurred" });
    }
};

// SignIn
const SignIn = async (req, res) => {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required.",
        });
    }

    try {
        // Find the user
        const checkUser = await User.findOne({ email });

        // Check if the user exists
        if (!checkUser) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        // Compare the password
        const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
        if (!checkPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // Generate a token
        const token = jwt.sign(
            {
                id: checkUser._id,
                role: checkUser.role,
                email: checkUser.email,
            },
            process.env.CLIENT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Set the token in a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000, // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: "Sign-in successful",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
            },
        });
    } catch (error) {
        console.error('Sign-in error:', error);
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred. Please try again later.",
        });
    }
};

const Logout = (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during logout. Please try again later.",
        });
    }
};


module.exports = {
    Signup,
    SignIn,
    Logout,
};

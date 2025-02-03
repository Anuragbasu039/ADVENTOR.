import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

// const API_BASE_URL = window.location.hostname === 'localhost'
//     ? 'http://localhost:8000'
//     : 'https://adventor-r9jp.onrender.com';
const API_BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:8000"
        : window.location.hostname === "adventor-vf6x.vercel.app"
            ? "https://adventor-vf6x.vercel.app"
            : "https://adventor-r9jp.onrender.com";




const SignInPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateInputs = () => {
        let valid = true;
        setEmailError('');
        setPasswordError('');

        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }

        if (!password || password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            valid = false;
        }

        setIsFormValid(valid);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }

        validateInputs();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateInputs()) {
            setIsLoading(true);

            try {
                const response = await axios.post(
                    `${API_BASE_URL}/api/auth/signup`, // Use your backend API URL
                    { email, password },
                    { withCredentials: true }
                );

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/signin');
                } else {
                    setEmailError(response.data.message);
                }
            } catch (error) {
                setEmailError('Failed to sign in. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Side - Image with Text */}
            <div className="w-full h-full md:w-1/2 bg-cover bg-center relative rounded-full"
                 style={{
                     backgroundImage: `url('https://packagefy.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpackagefy.appspot.com%2Fo%2Fdestinations%252Fmeghalaya.png%3Falt%3Dmedia%26token%3Daa6f50e6-4e1f-4762-b3a0-e6226fc2553e&w=1920&q=75')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 ">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>Adventor.</h1>
                    <p className="text-white text-lg text-center md:text-xl">
                        Travel is the only purchase that enriches you in ways beyond material wealth
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4 md:p-8">
                <div className="max-w-md w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6" style={{ fontFamily: 'cursive' }}>Welcome</h2>
                    <p className="text-gray-600 mb-6">Signup with Email</p>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Id</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@gmail.com"
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                        />
                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                    </div>

                    {/* Signup Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? 'Signing Up...' : 'Signup'}
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don’t have an account? <Link to="/signin" className="text-teal-600 hover:underline">Login Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

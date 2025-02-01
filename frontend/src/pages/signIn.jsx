import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";

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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

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
                    `${API_BASE_URL}/api/auth/signin`,
                    { email, password },
                    { withCredentials: true }
                );

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/home');
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

    const handleGoogleSuccess = async (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/auth/google-signin`,
                { token: credentialResponse.credential },
                { withCredentials: true }
            );

            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            }
        } catch (error) {
            console.error('Google sign-in failed:', error);
        }
    };

    const handleGoogleFailure = () => {
        console.error('Google sign-in failed');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full h-full md:w-1/2 bg-cover bg-center relative rounded-full"
                 style={{
                     backgroundImage: `url('https://packagefy.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpackagefy.appspot.com%2Fo%2Fdestinations%252Fkerala.jpg%3Falt%3Dmedia%26token%3Da80c5119-bd32-429c-a555-3a2211ea02da&w=3840&q=75')`
                 }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>Adventor.</h1>
                    <p className="text-white text-lg text-center md:text-xl">
                        Travel is the only purchase that enriches you in ways beyond material wealth
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4 md:p-8">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-teal-600 mb-6" style={{ fontFamily: 'cursive' }}>Welcome</h2>
                    <p className="text-gray-600 mb-6">Login with Email</p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Id</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleInputChange} className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@gmail.com" />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleInputChange} className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" />
                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                    </div>
                    <div className="flex justify-end mb-4">
                        <Link to="/forgot-password" className="text-sm text-teal-600 hover:underline">Forgot your password?</Link>
                    </div>
                    <button onClick={handleSubmit} className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" disabled={!isFormValid || isLoading}>{isLoading ? 'Signing in...' : 'LOGIN'}</button>
                    <div className="mt-4 flex justify-center">
                        <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
                    </div>
                    <p className="text-center text-gray-600 text-sm mt-4">Don’t have an account? <Link to="/signup" className="text-teal-600 hover:underline">Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

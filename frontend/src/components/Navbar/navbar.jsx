import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const API_BASE_URL =
        window.location.hostname === "localhost"
            ? "http://localhost:8000"
            : window.location.hostname === "adventor-vf6x.vercel.app"
                ? "https://adventor-vf6x.vercel.app"
                : "https://adventor-r9jp.onrender.com";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const clearTokens = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
    };

    const handleLogout = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
            clearTokens();
            navigate("/signin");
        } catch (error) {
            console.error("Error logging out:", error);
            alert("An error occurred while logging out. Please try again.");
        }
    };

    return (
        <nav className="flex items-center justify-between p-4 shadow-lg bg-white rounded-full mx-4 lg:mx-auto lg:max-w-5xl relative z-50">
            <div className="text-3xl font-bold text-teal-600 ml-4">
                Adventor.
            </div>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-teal-600 text-3xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div className={`lg:flex lg:items-center lg:justify-center ${isOpen ? "block" : "hidden"} transition-all duration-300 lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-lg z-40`}>
                <ul className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 text-gray-700 py-4 lg:py-0 justify-center">
                    <li>
                        <Link to="/home" className="hover:text-teal-600 cursor-pointer font-[cursive] relative after:block after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-teal-600 cursor-pointer font-[cursive]  relative after:block after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/registration" className="hover:text-teal-600 cursor-pointer font-[cursive] relative after:block after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            Registration For School Camping
                        </Link>
                    </li>
                    <li>
                        <Link to="/trip" className="hover:text-teal-600 cursor-pointer font-[cursive] relative after:block after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            Adventures
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-teal-600 cursor-pointer font-[cursive] relative after:block after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className="block lg:hidden bg-teal-600 text-white py-2 px-6 rounded-full mt-4 mx-auto" onClick={handleLogout}>
                    Log Out
                </button>
            </div>

            <button className="hidden lg:block bg-teal-600 text-white py-2 px-6 rounded-full" onClick={handleLogout}>
                Log Out
            </button>
        </nav>
    );
};

export default Navbar;

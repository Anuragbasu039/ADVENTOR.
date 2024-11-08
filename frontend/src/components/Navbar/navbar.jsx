import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/adventure logo.png';

function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setIsServicesDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Navbar Wrapper with margin */}
            <div className="mt-5">
                {/* Sticky Navbar */}
                <nav className="sticky top-5 z-50 border-gray-200 dark:bg-gray-900 rounded-full">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="w-48" alt="Logo" />
                        </a>
                        <div className={`items-center justify-between ${isMobileMenuOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li className="relative">
                                    <button onClick={toggleServicesDropdown} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Services 👇
                                    </button>
                                    {isServicesDropdownOpen && (
                                        <ul className="absolute left-0 mt-2 w-44 text-sm list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <li>
                                                <a href="/trip" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Service 1</a>
                                            </li>
                                            <li>
                                                <a href="/service2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Service 2</a>
                                            </li>
                                            <li>
                                                <a href="/service3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Service 3</a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a href="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</a>
                                </li>
                                <li>
                                    <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                                <button className="bg-black rounded-2xl w-24 h-7">
                                    <a href="/signin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white">Logout</a>
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Home;

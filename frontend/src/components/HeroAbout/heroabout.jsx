import React from 'react';
import dubai from '../../assets/dubai.webp';
import Singapour from '../../assets/singapour.webp';
import Maldives from '../../assets/maldives.webp';

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 bg-white">
                {/* Image Section */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side - Two smaller images stacked vertically */}
                    <div className="space-y-4">
                        <img
                            src={dubai}
                            alt="Travel Destination 1"
                            className="w-full h-60 sm:h-72 md:w-64 md:h-60 rounded-lg shadow-lg object-cover"
                        />
                        <img
                            src={Singapour}
                            alt="Travel Destination 2"
                            className="w-full h-60 sm:h-72 md:w-64 md:h-60 rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Center large image */}
                    <div className="mt-4 md:mt-16">
                        <img
                            src={Maldives}
                            alt="Travel Destination 3"
                            className="w-full h-60 sm:h-72 md:w-64 md:h-96 rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Right Section with Text */}
                <div className="mt-8 md:mt-0 md:ml-16 max-w-md text-center md:text-left">
                    <h3 className="text-lg font-medium text-gray-500">Welcome to Adventor.</h3>
                    <h1 className="text-4xl font-bold text-black mt-2">Explore with us!</h1>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Your gateway to unforgettable travel experiences. At Adventor, we take pride in being your
                        one-stop solution for all your travel needs. We make travel better and easier for people of
                        India. Adventor ideally caters to a diverse range of customers to maximize its market reach
                        and appeal. This includes: Leisure Travelers, Business Travelers, Adventure Seekers,
                        Budget-conscious Travelers Offering affordable options, Honeymooners, Educational Student tours.
                    </p>

                    {/* Button Below the Paragraph */}
                    <div className="mt-8">
                        <a
                            href="/about"
                            className="inline-block bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
                        >
                            About
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;

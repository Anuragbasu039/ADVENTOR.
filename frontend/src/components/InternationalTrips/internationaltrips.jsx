import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Singapour from '../../assets/singapour.webp';
import Malaysia from '../../assets/malaysia.webp';
import Dubai from '../../assets/dubai.webp';
import Azerbaizan from '../../assets/Azerbaizan.webp';

const destinations = [
    { name: 'Singapour', img: Singapour, path: '/north-east' },
    { name: 'Malaysia', img: Malaysia, path: '/andaman' },
    { name: 'Dubai', img: Dubai, path: '/himachal-pradesh' },
    { name: 'Azerbaizan', img: Azerbaizan, path: '/goa' },
    // Add more items with corresponding paths if needed
];

// Duplicate slides to create a seamless loop effect
const extendedDestinations = [...destinations, ...destinations];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(destinations.length);
    const navigate = useNavigate(); // Initialize navigate

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? extendedDestinations.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === extendedDestinations.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Reset index to the first set of slides when reaching the duplicated set
    useEffect(() => {
        if (currentIndex === extendedDestinations.length - destinations.length) {
            setTimeout(() => {
                setCurrentIndex(destinations.length);
            }, 300);
        }
        if (currentIndex === destinations.length - 1) {
            setTimeout(() => {
                setCurrentIndex(extendedDestinations.length - destinations.length - 1);
            }, 300);
        }
    }, [currentIndex]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center mb-6">
                Must visit<span className="text-teal-600"> International</span> Destinations
            </h2>
            <div className="relative flex items-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrevClick}
                    className="absolute left-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none z-10"
                >
                    ❮
                </button>

                {/* Slider Container */}
                <div className="overflow-hidden w-full px-6"> {/* Padding for partial view */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex - destinations.length) * 10}%)`,
                            width: `${extendedDestinations.length * 10}%`, // Adjust width for the duplicated slides
                        }}
                    >
                        {extendedDestinations.map((destination, index) => (
                            <div
                                key={index}
                                className="flex-none w-1/4 px-2 cursor-pointer"
                                onClick={() => navigate(destination.path)} // Navigate on click
                            >
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={destination.img}
                                        alt={destination.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                                        {destination.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNextClick}
                    className="absolute right-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none z-10"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Slider;

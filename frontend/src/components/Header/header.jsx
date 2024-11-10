import React from 'react';
import { Link } from 'react-router-dom';
import keralaImage from '../../assets/Kerala.jpg';

const AdventureTravel = () => {
    return (
        <div
            className="relative w-full h-80 bg-cover bg-center rounded-3xl mt-16"
            style={{ backgroundImage: `url(${keralaImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                {/* Main Text */}
                <h1 className="text-4xl md:text-5xl font-bold font-rogthem mb-2">Discover the</h1>
                <h2 className="text-5xl md:text-6xl font-extrabold font-rogthem mb-4">Adventure Travel</h2>

                {/* Subtitle */}
                <p className="text-lg font-rogthem mb-8">Your best Adventure Deals, visit nature.</p>

                {/* Button with Link */}
                <Link to="/trip">
                    <button className="px-8 py-3 bg-white text-teal-600 font-semibold font-rogthem rounded-md hover:bg-gray-200 transition">
                        View Adventures
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AdventureTravel;

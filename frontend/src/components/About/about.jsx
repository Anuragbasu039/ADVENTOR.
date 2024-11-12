import React from 'react';
import dubai from '../../assets/dubai.webp';
import Singapour from '../../assets/singapour.webp';
import Maldives from '../../assets/maldives.webp';
import Footer from "../Footer/footer.jsx";
import Teammember from "../TeamMember/teammember.jsx";

const AboutSection = () => {
    return (
        <>
            <h1 className="font-medium text-5xl text-teal-600 text-center mt-8">About</h1>

            <div className="flex flex-col-reverse md:flex-row items-center justify-center py-8 px-4 md:px-20 bg-white">
                {/* Image Section */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {/* Left side - Two smaller images stacked vertically */}
                    <div className="space-y-4 sm:space-y-6">
                        <img
                            src={dubai}
                            alt="Travel Destination 1"
                            className="w-full h-40 sm:h-48 md:h-60 rounded-lg shadow-lg object-cover"
                        />
                        <img
                            src={Singapour}
                            alt="Travel Destination 2"
                            className="w-full h-40 sm:h-48 md:h-60 rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Center large image */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 row-span-2 md:mt-0 mt-8">
                        <img
                            src={Maldives}
                            alt="Travel Destination 3"
                            className="w-full md:w-64 h-48 sm:h-60 md:h-96 rounded-lg shadow-lg object-cover mx-auto"
                        />
                    </div>
                </div>

                {/* Right Section with Text */}
                <div className="mt-8 md:mt-0 md:ml-16 max-w-md text-center md:text-left">
                    <h3 className="text-lg font-medium text-gray-500">Welcome to Adventor.</h3>
                    <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">Explore with us!</h1>
                    <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
                        Your gateway to unforgettable travel experiences. At Adventor, we take pride in being your
                        one-stop solution for all your travel needs. We make travel better and easier for people of
                        India. Adventor ideally caters to a diverse range of customers to maximize its market reach
                        and appeal. This includes: Leisure Travelers, Business Travelers, Adventure Seekers,
                        Budget-conscious Travelers offering affordable options, Honeymooners, Educational Student tours.
                    </p>
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl text-teal-600 text-center mt-8">Meet Our Team</h1>
            <Teammember />
            <Footer />
        </>
    );
};

export default AboutSection;

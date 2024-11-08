import React from 'react';

const OfferSection = () => {
    return (
        <section className="relative bg-white py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                    backgroundImage: 'url(https://cdn.prod.website-files.com/5d1a52a13da2117c30807d3c/5e865bd815c829f7551d919b_Treesbiggerbottom.png)',
                    backgroundSize: 'cover',  // Ensures the background image covers the entire width and height
                    backgroundPosition: 'center',  // Keeps the image centered
                }}
            ></div>

            {/* Content */}
            <div className="relative text-center mb-8">
                <h4 className="text-teal-600 text-lg font-semibold">Value before business</h4>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">We Offer the Best</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">🧗</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Various Adventures</h3>
                        <p className="text-gray-600">Tempor incididunt ut labore lore magna aliqua sem ufna.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">🚶</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Adventurous Trails</h3>
                        <p className="text-gray-600">Et dolore magna aliqua quis ipsum suspen disse ultrices.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">👩‍🏫</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Trained Guides</h3>
                        <p className="text-gray-600">Quis ipsum suspendisse ultrices gravida risus viverra maecenas.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">👨‍👩‍👧</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Family Trips</h3>
                        <p className="text-gray-600">Incididunt ut labore. Et dolore magna aliqua quis ipsum supe.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">📦</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Custom Packages</h3>
                        <p className="text-gray-600">Et dolore magna aliqua quis ipsum suspendisse ultrices gravi.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-3xl text-teal-600 mr-4">📚</div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Complete Guide</h3>
                        <p className="text-gray-600">Tempor incididunt ut labore et dolore magna quis ipsum suspe.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;

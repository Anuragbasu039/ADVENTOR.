import React from 'react';
import Zipline from '../../assets/Zip Lines.jpg';
import Canoeing from '../../assets/Canoeing.jpg';
import Bungeejumping from '../../assets/Bungee Jump.jpg';
import Kayaking from '../../assets/Kayaking.jpg';

const AdventureIdeas = () => {
    return (
        <section className="relative py-12 bg-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                    backgroundImage: 'url(https://cdn.prod.website-files.com/5d1a52a13da2117c30807d3c/5e865361ce09d70acd007c6f_MountainHead3.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Content */}
            <div className="relative text-center mb-8">
                <h2 className="text-teal-600 text-lg font-semibold">Take yourself</h2>
                <h1 className="text-3xl font-bold">Adventure Ideas</h1>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img src={Zipline} alt="Zip Lines" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Zip Lines</h3>
                    <p className="text-gray-600 mb-4">Add some adrenalin to your travel senses by zipline travel.</p>
                    <button className="bg-teal-600 text-white py-2 px-4 rounded">Enquire</button>
                </div>

                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img src={Kayaking} alt="Kayaking" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kayaking</h3>
                    <p className="text-gray-600 mb-4">Kayaking makes thrill take to the next level.</p>
                    <button className="bg-teal-600 text-white py-2 px-4 rounded">Enquire</button>
                </div>

                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img src={Bungeejumping} alt="Bungee Jump" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bungee Jump</h3>
                    <p className="text-gray-600 mb-4">Bungee jumps is one of the most exhilarating adventure.</p>
                    <button className="bg-teal-600 text-white py-2 px-4 rounded">Enquire</button>
                </div>

                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img src={Canoeing} alt="Canoeing" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Canoeing</h3>
                    <p className="text-gray-600 mb-4">Just sail in the calm waters of the sea with complete safety.</p>
                    <button className="bg-teal-600 text-white py-2 px-4 rounded">Enquire</button>
                </div>
            </div>
        </section>
    );
};

export default AdventureIdeas;

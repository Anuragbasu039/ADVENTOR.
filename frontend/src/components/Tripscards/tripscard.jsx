// eslint-disable-next-line no-unused-vars
import React from 'react';
import dubai from '../../assets/dubai.webp';
import thailand from '../../assets/thailand.webp';
import Vietnam from '../../assets/vietnam.webp'
import Maldives from '../../assets/maldives.webp'
import Bali from '../../assets/bali.webp'
import Bhutan from '../../assets/bhutan.webp'
import Malaysia from '../../assets/malaysia.webp'
import Singapore from '../../assets/singapour.webp'
import Azerbaijan from '../../assets/Azerbaizan.webp'
import HimachalPradesh from '../../assets/Himachal pradesh.webp'
import Goa from '../../assets/goa.webp'
import Meghalaya from '../../assets/meghalaya.webp'
import Andaman from '../../assets/Andaman.webp'
import Kashmir from '../../assets/Kashmir.webp'
import Uttarakhand from '../../assets/uttrakhand.jpg'
import Rajasthan from '../../assets/rajasthan.webp'
import NorthEast from '../../assets/north east.webp'
import Kerala from '../../assets/kerala.webp'
import Nanital from '../../assets/nanital.png'
import Shimla from '../../assets/shimla.png'
// Import the rest of your images if you have them or replace with placeholder paths
const destinations = [
    { name: "Dubai", img: dubai, link: "/dubai" },
    { name: "Thailand", img: thailand, link: "/thailand" },
    // { name: "Vietnam", img: Vietnam, link: "/vietnam" },
    { name: "Maldives", img: Maldives, link: "/maldives" },
    { name: "Bali", img: Bali, link: "/bali" },
    { name: "Bhutan", img: Bhutan, link: "/bhutan" },
    { name: "Malaysia", img: Malaysia, link: "/home" },
    { name: "Singapore", img: Singapore, link: "/home" },
    { name: "Azerbaijan", img: Azerbaijan, link: "/home" },
    { name: "Himachal Pradesh", img: HimachalPradesh, link: "/home" },
    { name: "Goa", img: Goa, link: "/" },
    { name: "Meghalaya", img: Meghalaya, link: "/home" },
    { name: "Andaman", img: Andaman, link: "/home" },
    { name: "Kashmir", img: Kashmir, link: "/home" },
    { name: "Uttarakhand", img: Uttarakhand, link: "/home" },
    { name: "Rajasthan", img: Rajasthan, link: "/home" },
    { name: "North East", img: NorthEast, link: "/home" },
    { name: "Kerala", img: Kerala, link: "/home" },
    { name: "Nanital", img: Nanital, link: "/nanital" },
    { name: "Shimla", img: Shimla, link: "/shimla" },
];

function BestTrips() {
    return (
        <div className="bg-white p-6">
            <h1 className="text-3xl font-bold text-center mb-8">
                Best Trips Across <span className="text-teal-600">The Globe</span>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {destinations.map((destination) => (
                    <a
                        key={destination.name}
                        href={destination.link}
                        className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                    >
                        <img
                            src={destination.img}
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                        />
                        {/* Text overlay positioned in the bottom-left corner */}
                        <div className="absolute bottom-0 left-0 w-full  p-2">
                            <span className="text-white text-lg font-semibold">{destination.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BestTrips;
// src/MasterPioneer.js

import React from 'react';
import shimlaImage from '../../assets/shimla.png';
import manaliImage from '../../assets/manali.png';
import nanitalImage from '../../assets/nanital.png';
// import outdoorcamp from '../../assets/outdoorcamp.png';
// import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const destinations = [
    {
        name: "Shimla",
        title: "Queen Of Hills",
        img: shimlaImage,
        days: 3,
        nights: 2,
        link: "/shimla"
    },
    {
        name: "Manali",
        title: "Valley Of The Gods",
        img: manaliImage,
        days: 3,
        nights: 2,
        link: "/manali"
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital"
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital"
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital"
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital"
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital"
    }
];

const MasterPioneer = () => {
    return (
        <>
            <div className="text-center font-sans">
                <header>
                    {/*<img src={outdoorcamp} alt="Outdoor Camp Logo" className="w-52 mb-5" />*/}
                    <h1 className="mt-[-20px] text-2xl font-bold">Master Pioneer</h1>
                </header>
                <div className="flex justify-center gap-24 mb-5 flex-wrap">
                    {destinations.map((destination) => (
                        <Link
                            to={destination.link}
                            key={destination.name}
                            className="bg-white rounded-lg shadow-lg overflow-hidden w-52 text-center no-underline text-black transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <img
                                src={destination.img}
                                alt={destination.name}
                                className="mt-5 w-4/5 h-30 object-cover mx-auto"
                            />
                            <h2 className="mt-2 text-xl font-semibold">{destination.name}</h2>
                            <p className="text-gray-500 text-sm italic">{`"${destination.title}"`}</p>
                            <div className="flex justify-center gap-3 mt-2 text-lg">
                                <span className="flex items-center">☀️ {destination.days} days</span>
                                <span className="flex items-center">🌙 {destination.nights} nights</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/*<Footer />*/}
        </>
    );
};

export default MasterPioneer;

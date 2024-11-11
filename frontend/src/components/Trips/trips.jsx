import React from 'react';
import Footer from '../../components/Footer/footer.jsx'; // Correct path
import { Link } from 'react-router-dom';
import Canoeing from '../../assets/Canoeing.jpg';
import Zipling from '../../assets/Zip Lines.jpg';
import Bungeejumping from '../../assets/Bungee Jump.jpg';
import Paragliding from '../../assets/paragliding.webp';
import Rafting from '../../assets/rafting.jpeg';
import Skydriving from '../../assets/skydriving.jpg';

const destinations = [
    {
        name: "Zipling",
        img: Zipling,
        link: "/zipling"
    },
    {
        name: "Bungee Jumping",
        img: Bungeejumping,
        link: "/bungeejumping"
    },
    {
        name: "Paragliding",
        img: Paragliding,
        link: "/paragliding"
    },
    {
        name: "Canoeing",
        img: Canoeing,
        link: "/canoeing"
    },
    {
        name: "Rafting",
        img: Rafting,
        link: "/rafting"
    },
    {
        name: "Skydriving",
        img: Skydriving,
        link: "/skydriving"
    },
];

const MasterPioneer = () => {
    return (
        <>
            <div className="text-center font-sans">
                <header>
                    <h1 className="mt-[-20px] text-5xl font-bold text-teal-600">Adventures</h1>
                </header>
                <div className="flex justify-center gap-24 mb-5 flex-wrap mt-16">
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
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MasterPioneer;

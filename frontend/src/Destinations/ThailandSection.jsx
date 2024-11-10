import React from 'react';
import Thailand1 from '../assets/thailand4.webp';
import Thailand2 from '../assets/thailand3.webp';
import Thailand3 from '../assets/thailand.webp';
import Thailand4 from '../assets/thailand2.webp'
import Footer from "../components/Footer/footer.jsx";
const trips = [
    {
        id: 1,
        image: Thailand1,
        title: 'Dubai with Ferrari World',
        nights: '4 Nights 5 Days',
        price: '₹ 41500',
        oldPrice: '₹ 42000',
        description: 'Stay Travel Meal Explore',
    },
    {
        id: 2,
        image: Thailand2,
        title: 'Dubai',
        nights: '4 Nights 5 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
    },
    {
        id: 3,
        image: Thailand3,
        title: 'Dubai with Adventure Activities',
        nights: '5 Nights 6 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
    },
    {
        id: 4,
        image: Thailand4,
        title: 'Dubai with Adventure Activities',
        nights: '5 Nights 6 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
    },
];

export default function ThailandPage() {
    return (
        <div className="flex flex-col items-center">
            {/* Header Section */}
            <div className="relative w-full h-[500px]">
                <img
                    src={Thailand2} // Replace with actual image path
                    alt="Thailand"
                    className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold" style={{ fontFamily: 'cursive' }}>
                        ThaiLand
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row p-4 space-y-6 md:space-y-0 md:space-x-8 max-w-7xl mx-auto">
                {/* Trip Cards Section */}
                <div className="flex flex-col space-y-4 w-full md:w-2/3">
                    {trips.map((trip) => (
                        <div
                            key={trip.id}
                            className="flex p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            onClick={() => alert(`Clicked on ${trip.title}`)}
                        >
                            <img
                                src={trip.image}
                                alt={trip.title}
                                className="w-32 h-32 object-cover rounded-md mr-4"
                            />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{trip.nights}</p>
                                    <h3 className="text-lg font-semibold">{trip.title}</h3>
                                    <p className="text-gray-600">{trip.description}</p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <p className="text-lg font-bold text-blue-600 mr-2">{trip.price}</p>
                                    <p className="text-sm text-gray-400 line-through">{trip.oldPrice}</p>
                                </div>
                            </div>
                            <button className="ml-auto h-12 mt-14 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                                See Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/3">
                    <form className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Get in Touch with our Travel experts.
                        </h2>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="number"
                            placeholder="Number of travellers"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            min="1"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            rows="4"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            SEND ME DETAILS
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

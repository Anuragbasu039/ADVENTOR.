import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dubai4 from "../assets/dubai4.webp"; // Example image
import Footer from "../components/Footer/footer.jsx";

// Sample trip data for demonstration purposes with dynamic images
const trips = [
    {
        id: 1,
        image: Dubai4, // Dynamic image for Dubai with Ferrari World
        title: 'Dubai with Ferrari World',
        nights: '4 Nights 5 Days',
        price: '₹ 41500',
        oldPrice: '₹ 42000',
        description: 'Stay Travel Meal Explore',
        itinerary: [
            {
                day: 1,
                title: "Leh Arrival | Acclimatization & Day At Leisure",
                details: "After arriving in Leh via flight, check in to our hotel, freshen-up and have some leisure..."
            },
            {
                day: 2,
                title: "The Leh Town | Leh Sightseeing Day",
                details: "Wake up to a relaxed morning and post breakfast, head out to explore the beautiful Leh town..."
            },
            // Add more days as necessary
        ]
    },
    {
        id: 2,
        image: Dubai4, // Replace with another image for another trip
        title: 'Dubai',
        nights: '4 Nights 5 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai | Leisure Day",
                details: "After arriving in Dubai, relax and enjoy a leisurely day exploring the city..."
            },
            // Add more days as necessary
        ]
    },
    {
        id: 3,
        image: Dubai4, // Replace with another image for another trip
        title: 'Dubai',
        nights: '4 Nights 5 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai | Leisure Day",
                details: "After arriving in Dubai, relax and enjoy a leisurely day exploring the city..."
            },
            // Add more days as necessary
        ]
    },
    {
        id: 4,
        image: Dubai4, // Replace with another image for another trip
        title: 'Dubai',
        nights: '4 Nights 5 Days',
        price: '₹ 54500',
        oldPrice: '₹ 55000',
        description: 'Stay Travel Meal Explore',
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai | Leisure Day",
                details: "After arriving in Dubai, relax and enjoy a leisurely day exploring the city..."
            },
            // Add more days as necessary
        ]
    },
    // More trips can be added here...
];

const Dubaibooking = () => {
    const { tripId } = useParams(); // Extract the tripId from URL params
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        // Find the trip by ID
        const selectedTrip = trips.find((trip) => trip.id === parseInt(tripId));
        setTrip(selectedTrip);
    }, [tripId]); // Re-run whenever tripId changes

    if (!trip) {
        return <div>Loading...</div>; // If no trip is found, display loading message
    }

    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section: Image and Title */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                    src={trip.image} // Dynamic image based on trip
                    alt={trip.title}
                    className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: 'cursive' }}>
                        {trip.title}
                    </h1>
                </div>
            </div>

            {/* Main Content: Trip Information */}
            <section className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* Left Column: About + Itinerary */}
                <div className="flex-1">
                    {/* About Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">About</h2>
                        <p className="text-gray-700 leading-relaxed">{trip.description}</p>
                        <p className="text-gray-700 mt-4"><strong>Nights: </strong>{trip.nights}</p>
                        <p className="text-gray-700 mt-2"><strong>Price: </strong>{trip.price}</p>
                        <p className="text-gray-700 mt-2"><strong>Old Price: </strong><del>{trip.oldPrice}</del></p>
                    </div>

                    {/* Itinerary Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Itinerary</h3>
                        {trip.itinerary.map((day, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg mb-6">
                                <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-t-lg">
                                    Day {day.day}
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2">{day.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{day.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Booking Form */}
                <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Book Now!</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Proceed to Payment
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Dubaibooking;

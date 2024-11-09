import React, { useState } from 'react';
import axios from 'axios';
import Footer from "../Footer/footer.jsx";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create the data object to send
        const data = { name, email, message };

        try {
            const response = await axios.post('http://localhost:8000/api/contact', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // If the response is successful, update the success message
            setSuccess(response.data.message);
            // Clear input fields
            setName('');
            setEmail('');
            setMessage('');
            setError('');
        } catch (error) {
            console.error('Error submitting contact form:', error);
            // Handle errors
            setError('Failed to submit the form. Please try again later.');
            setSuccess('');
        }
    };

    return (
        <>
            <h1 className="text-5xl text-teal-600">Contact</h1>
            <section className="min-h-screen bg-cover rounded-3xl relative "
                     style={{ backgroundImage: "url('https://cdn.prod.website-files.com/5d1a52a13da2117c30807d3c/5e865361ce09d70acd007c6f_MountainHead3.png') " }}>
                {/* Overlay with 5% opacity */}
                <div className="absolute inset-0  rounded-3xl"></div>

                <div className="flex flex-col min-h-screen bg-black/60 rounded-3xl">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Ultimate design solution</h1>
                                <p className="max-w-xl mt-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo aliquid
                                    molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                                    autem doloremque ducimus numquam doloribus, error sed.
                                </p>
                                <button
                                    className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    get in touch
                                </button>
                            </div>

                            <div className="lg:w-1/2 lg:mx-6">
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
                                    {error && <p className="text-red-500">{error}</p>}
                                    {success && <p className="text-green-500">{success}</p>}
                                    <div>
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows="4"
                                            required
                                            className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        />
                                    </div>
                                    <button type="submit" className="w-full px-4 py-2 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Contact;

import React, { useState, useEffect } from 'react';
import pic1 from '../../assets/anurag.png';
import pic2 from '../../assets/Ankit.jpg'
const testimonials = [
    {
        id: 1,
        name: 'Anurag Bose',
        title: 'Full Stack Developer',
        image: pic1,
        feedback:
            'Tempor incididunt ut labore. Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    },
    {
        id: 2,
        name: 'Ankit Bose',
        title: 'UI/UX Designer',
        image: pic2,
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempor eget.',
    },
    // Add more testimonials as needed
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch to the next testimonial every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const { name, title, image, feedback } = testimonials[currentIndex];

    return (
        <section className="bg-white py-12 px-6 md:px-16 lg:px-24 text-center">
            <div className="text-center mb-8">
                <h4 className="text-teal-600 text-lg font-semibold">Client Testimonial</h4>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Adventure Talks</h2>
            </div>
            <div className="max-w-xl mx-auto">
                <div className="flex flex-col items-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 rounded-full border-4 border-teal-600 mb-4 object-cover"
                        style={{ width: '100px', height: '100px' }}
                    />
                    <p className="text-gray-600 italic mb-4">{feedback}</p>
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-500">{title}</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;

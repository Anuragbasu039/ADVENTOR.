import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="relative w-full text-white py-10 px-5 md:px-20">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                     backgroundImage: 'url(https://cdn.prod.website-files.com/5d1a52a13da2117c30807d3c/5e865361ce09d70acd007c6f_MountainHead3.png)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            ></div>

            {/* Content of the footer */}
            <div className="relative flex flex-col items-center md:flex-row md:items-start md:justify-between mx-auto max-w-screen-xl">

                {/* Logo and Description */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-4 text-teal-600">Adventor.</h1>
                    <p className="text-black max-w-xs">
                        Going on an adventure is not about just fun, it's all about yourself and entertaining yourself. Get the best out adventure activities in you and start living the moment.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start space-x-3 mt-4">
                        <a href="#" className="text-black hover:text-teal-600">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-black hover:text-teal-600">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-black hover:text-teal-600">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="text-black hover:text-teal-600">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4 text-teal-600">Useful Links</h2>
                    <ul className="text-black space-y-2">
                        <li><a href="/home" className="hover:text-teal-600">Home</a></li>
                        <li><a href="/about" className="hover:text-teal-600">About</a></li>
                        <li><a href="/trip" className="hover:text-teal-600">Adventures</a></li>
                        {/*<li><a href="#" className="hover:text-teal-600">Blog</a></li>*/}
                        <li><a href="/contact" className="hover:text-teal-600">Contact</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4 text-teal-600">Support Links</h2>
                    <ul className="text-black space-y-2">
                        <li><a href="#" className="hover:text-teal-600">Ask a Question</a></li>
                        <li><a href="#" className="hover:text-teal-600">Delivery Terms</a></li>
                        <li><a href="#" className="hover:text-teal-600">Careers</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4 text-teal-600">Reach Us</h2>
                    <ul className="text-black space-y-2 ">
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            932 ABCD
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            example@example.com
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                            91-9870xxxxxx
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

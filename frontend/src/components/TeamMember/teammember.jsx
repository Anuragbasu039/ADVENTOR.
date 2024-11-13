import React from 'react';
import Anurag from '../../assets/anurag.png'
import Ankit from '../../assets/Ankit.jpg'
import Abdul from '../../assets/Abdul.jpg'
const teamMembers = [
    {
        name: 'Anurag Bose',
        role: 'Developer',
        image: Anurag, // Replace with actual image URL
    },
    {
        name: 'Abdul Rehman',
        role: 'Developer',
        image: Abdul, // Replace with actual image URL
    },
    {
        name: 'Ankit Bose',
        role: 'UI/UX Designer',
        image: Ankit, // Replace with actual image URL
    },
];

const TeamSection = () => {
    return (
        <div className="py-12 px-4 md:px-20 bg-white">
            {/*<h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Team</h2>*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-lg"
                            />
                            {member.linkedIn && (
                                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-300">
                                    <i className="fab fa-linkedin text-blue-600"></i>
                                </a>
                            )}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-blue-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;

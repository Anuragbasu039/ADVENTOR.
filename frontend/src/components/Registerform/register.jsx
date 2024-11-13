// AdventureForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import logo from "../../assets/adventure logo.png";
import Footer from "../Footer/footer.jsx";
// import Navbar from '../Navbar/navbar.jsx';
// import axios from 'axios'; // Import axios

const AdventureForm = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Form state to store form inputs
    const [formData, setFormData] = useState({
        schoolName: "",
        venue: "",
        date: "",
        year: "",
        event: "",
        studentName: "",
        guardianName: "",
        bloodGroup: "",
        gender: "",
        dob: "",
        class: "",
        section: "",
        whatsappNo: "",
        mobileNo: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        medicalCondition: ""
    });

    // Handle form field change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Assuming the backend response is successful and returns status 200
            navigate("/checkform", { state: { formData } }); // Pass formData to CheckForm
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };


    return (
        <>
            {/*<Navbar />*/}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <header className="text-center mb-6">
                    {/*<div className="flex justify-center items-center mb-2">*/}
                    {/*    <div className="w-80 h-16 overflow-hidden flex items-center justify-center">*/}
                    {/*        /!*<img src={logo} alt="Logo" />*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <h1 className="text-5xl text-teal-600 font-bold">Adventor.</h1>
                    <p className="text-sm text-gray-600">Your Gateway Of Affordable Adventure</p>
                    <h2 className="mt-4 py-2 bg-teal-600 text-white font-semibold rounded-lg t">
                        Registration Form
                    </h2>
                </header>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* School Name and Venue */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">School Name</label>
                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Venue</label>
                            <input
                                type="text"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Year</label>
                            <input
                                type="number"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Camp/Event/Course */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Camp/Event/Course</label>
                        <input
                            type="text"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Student and Guardian Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Student Name</label>
                            <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Guardian Name</label>
                            <input
                                type="text"
                                name="guardianName"
                                value={formData.guardianName}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Blood Group, Gender, Date of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Blood Group</label>
                            <input
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Gender</option>
                                {/* Default placeholder option */}
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Class, Section, WhatsApp No, Mobile No */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Class</label>
                            <input
                                type="text"
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Section</label>
                            <input
                                type="text"
                                name="section"
                                value={formData.section}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">WhatsApp No</label>
                            <input
                                type="text"
                                name="whatsappNo"
                                value={formData.whatsappNo}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Mobile No</label>
                            <input
                                type="text"
                                name="mobileNo"
                                value={formData.mobileNo}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Address, City, State, Pincode */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Medical Condition */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Medical Condition</label>
                        <input
                            type="text"
                            name="medicalCondition"
                            value={formData.medicalCondition}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AdventureForm;

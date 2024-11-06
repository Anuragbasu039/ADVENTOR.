import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar.jsx";
import logo from "../../assets/adventure logo.png";
import axios from "axios";

const CheckForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData || {};

    // Handle final submit
    const handleFinalSubmit = async () => {
        try {
            console.log(formData)
            // Send the data to the backend using Axios (no agreement field)
            const response = await axios.post("http://localhost:8000/api/form/register", formData);

            // If the request is successful, navigate to a success page or confirmation page
            console.log("Registration successful:", response.data);
            navigate("/success"); // Assuming you have a /success route

        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle the error as needed (e.g., show a message to the user)
        }
    };

    // Handle edit
    const handleEdit = () => {
        navigate("/register", { state: { formData } });
    };

    // Handle print action
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                <header className="text-center mb-6">
                    <div className="flex justify-center items-center mb-4">
                        <img src={logo} alt="Adventure Logo" className="w-48 h-62" />
                    </div>
                    <h1 className="text-3xl font-bold">ADVENTUREHAVEN</h1>
                    <p className="text-sm text-gray-600">Your Gateway Of Affordable Adventure</p>
                    <h2 className="mt-4 py-2 bg-gray-800 text-white font-semibold rounded-lg text-lg">
                        Registration Form
                    </h2>
                </header>

                {/* Display form fields in two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-700">School Name:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.schoolName || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Venue:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.venue || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Date:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.date || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Year:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.year || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Camp/Event/Course:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.campEventCourse || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Student Name:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.studentName || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Guardian Name:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.guardianName || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Blood Group:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.bloodGroup || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Gender:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.gender || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Date of Birth:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.dob || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Class:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.class || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Section:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.section || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">WhatsApp No:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.whatsappNo || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Mobile No:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.mobileNo || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Address:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.address || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">City:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.city || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">State:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.state || "Not provided"}</p>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Pincode:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.pincode || "Not provided"}</p>
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm font-semibold text-gray-700">Medical Condition:</label>
                        <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">{formData.medicalCondition || "Not provided"}</p>
                    </div>
                </div>

                {/* Disclaimer and Actions */}
                <p className="mt-6 text-xs text-gray-700 italic">
                    I agree to adhere to the discipline of the movement and abide by the rules and regulations...
                </p>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleEdit}
                        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleFinalSubmit}
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    {/* Print button */}
                    <button
                        onClick={handlePrint}
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
                    >
                        Print
                    </button>
                </div>
            </div>
        </>
    );
};

export default CheckForm;

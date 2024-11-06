const Registration = require('../../models/Registerform');

// Function to create a new registration
async function createRegistration(req, res) {
    const {
        schoolName,
        venue,
        date,
        year,
        event,
        studentName,
        guardianName,
        bloodGroup,
        gender,
        dob,
        class: studentClass,
        section,
        whatsappNo,
        mobileNo,
        address,
        city,
        state,
        pincode,
        medicalConditions,
        // applicantSignature,
        // parentSignature
    } = req.body;

    // Create a new registration instance
    const registration = new Registration({
        schoolName,
        venue,
        date,
        year,
        event,
        studentName,
        guardianName,
        bloodGroup,
        gender,
        dob,
        class: studentClass,
        section,
        whatsappNo,
        mobileNo,
        address,
        city,
        state,
        pincode,
        medicalConditions,
        // applicantSignature,
        // parentSignature
    });

    try {
        // Save the registration to the database using async/await
        const savedRegistration = await registration.save();
        res.status(201).json({ message: "Registration successful", registration: savedRegistration });
    } catch (error) {
        // Handle any error that occurred during the save operation
        return res.status(500).json({ error: "Failed to create registration", details: error.message });
    }
}

// Function to get a registration by ID
async function getRegistrationById(req, res) {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: "Registration not found" });
        }
        res.status(200).json(registration);
    } catch (error) {
        return res.status(500).json({ error: "Failed to retrieve registration", details: error.message });
    }
}

// Function to get all registrations
async function getAllRegistrations(req, res) {
    try {
        const registrations = await Registration.find({});
        res.status(200).json(registrations);
    } catch (error) {
        return res.status(500).json({ error: "Failed to retrieve registrations", details: error.message });
    }
}

// Function to edit (update) a registration by ID
async function editRegistration(req, res) {
    const updatedData = req.body;

    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });
        if (!updatedRegistration) {
            return res.status(404).json({ error: "Registration not found" });
        }
        res.status(200).json({ message: "Registration updated successfully", registration: updatedRegistration });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update registration", details: error.message });
    }
}

// Function to delete a registration by ID
async function deleteRegistration(req, res) {
    try {
        const deletedRegistration = await Registration.findByIdAndDelete(req.params.id);
        if (!deletedRegistration) {
            return res.status(404).json({ error: "Registration not found" });
        }
        res.status(200).json({ message: "Registration deleted successfully", registration: deletedRegistration });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete registration", details: error.message });
    }
}

module.exports = {
    createRegistration,
    getRegistrationById,
    getAllRegistrations,
    editRegistration,
    deleteRegistration
};

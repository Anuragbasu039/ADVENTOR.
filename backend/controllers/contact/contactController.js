const Contact = require('../../models/Contact');

// Controller function to handle contact form submission
const submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { submitContactForm }; // Ensure function is exported correctly

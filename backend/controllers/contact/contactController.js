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
        const Contact = require('../../models/contact'); // Ensure you have a valid model
        const submitContactForm = async (req, res) => {
            try {
                const { name, email, message } = req.body;

                if (!name || !email || !message) {
                    return res.status(400).json({ message: "All fields are required" });
                }

                // Check if contact with the same name already exists
                const existingContact = await Contact.findOne({ name });

                if (existingContact) {
                    return res.status(400).json({ message: "This contact already exists." });
                }

                // Save the new contact
                const newContact = new Contact({ name, email, message });
                await newContact.save();

                res.status(200).json({ message: "Message saved successfully!" });
            } catch (error) {
                console.error("Error saving contact:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        };

        module.exports = { submitContactForm };
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { submitContactForm }; // Ensure function is exported correctly
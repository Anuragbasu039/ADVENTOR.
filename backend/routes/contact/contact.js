const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../../controllers/contact/contactController'); // Adjust path accordingly

router.post('/contact', submitContactForm); // Ensure submitContactForm is defined and imported correctly

module.exports = router;

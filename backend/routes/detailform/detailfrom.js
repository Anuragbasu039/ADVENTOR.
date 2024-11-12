const express = require('express');
const router = express.Router();
const { submitDetailForm } = require('../../controllers/detailform/detailController'); // Adjust path accordingly

router.post('/details', submitDetailForm); // Ensure submitContactForm is defined and imported correctly

module.exports = router;
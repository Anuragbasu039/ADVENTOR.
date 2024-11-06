const express = require('express');
const {
    createRegistration,
    getRegistrationById,
    getAllRegistrations,
    editRegistration,
    deleteRegistration
} = require('../../controllers/registerform/registerController');
const router = express.Router();

// Route to handle form submission
router.post('/register', createRegistration);

// Route to get all registrations
router.get('/registrations', getAllRegistrations);

// Route to get a specific registration by ID
router.get('/registrations/:id', getRegistrationById);

// Route to edit/update a specific registration by ID
router.put('/registrations/:id', editRegistration);

// Route to delete a specific registration by ID
router.delete('/registrations/:id', deleteRegistration);

module.exports = router;

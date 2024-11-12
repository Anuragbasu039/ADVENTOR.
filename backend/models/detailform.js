const mongoose = require('mongoose');

const DetailFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    travellers: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const DetailForm = mongoose.model('Detail', DetailFormSchema);
module.exports = DetailForm;

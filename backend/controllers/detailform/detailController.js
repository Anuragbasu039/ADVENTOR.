const DetailForm = require('../../models/detailform')

const submitDetailForm = async (req, res) => {
    const {name, email, address, number, travellers, message} = req.body;


    try {
        const newDetails = new DetailForm({name, email, address, number, travellers, message})
        await newDetails.save();
        res.status(201).json({message: 'Detail form submitted successfully', detail: newDetails})
    } catch (error) {
        console.error('Error submitting detail form:', error);
        res.status(500).json({message: 'Server error', error});
    }
};

module.exports = {submitDetailForm};
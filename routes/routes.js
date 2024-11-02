const express = require('express');
const Model = require('../model/model'); // Assuming this is the path to your Mongoose model
const router = express.Router();

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    mail: {
        required: true,
        type: String
    },
    phone:{
        type: Number
    },
    subject:{
        type: String
    },
    message:{
        required:true,
        type: String
    }
})

module.exports = mongoose.model('Message', dataSchema)
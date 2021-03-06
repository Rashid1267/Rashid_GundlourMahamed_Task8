const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },
    type: {
        type: String,
        required: true
    }

});

mongoose.model('Food', foodSchema);
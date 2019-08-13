const mongoose = require('mongoose');

const authorScheama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Author', authorScheama);
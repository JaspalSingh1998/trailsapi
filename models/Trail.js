const mongoose = require('mongoose');

const TrailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    thumbnail: {
        type: String
    }
})

module.exports = mongoose.model('Trail', TrailSchema)
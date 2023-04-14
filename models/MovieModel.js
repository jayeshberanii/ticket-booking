const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "producers"
    },
    actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors"
        }
    ],
    genre: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})
const Movie = new mongoose.model('movies', movieSchema)
module.exports = Movie
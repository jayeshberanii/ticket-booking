const mongoose = require('mongoose')

const screenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seats: {
        type:Object,
        required:true
    },
    cinema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cinemas"
    }
}, {
    timestamps: true
})
const Screen = new mongoose.model('screens', screenSchema)
module.exports = Screen
const CurrentMovie = require("../models/CurrentMovieModel")

//get CurrentMovies
const getCurrentMovies = async (req, res) => {
    try {
        const currentMovies = await CurrentMovie.find()
        res.status(200).json(currentMovies)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create CurrentMovie
const createCurrentMovie = async (req, res) => {
    try {
        const currentMovie = await CurrentMovie.create(req.body)
        res.status(201).json(currentMovie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get CurrentMovie
const getCurrentMovie = async (req, res) => {
    try {
        const currentMovie = await CurrentMovie.findById(req.params.id)
            .populate({path:"movie", populate:{path:"actors producer"}})
            .populate('cinema', "name country city")
            .populate('screen', "name seats")
            
    

res.status(201).json(currentMovie)
    } catch (error) {
    res.status(500).json({ msg: error.message })
}
}

//remove CurrentMovie
const removeCurrentMovie = async (req, res) => {
    try {
        const currentMovie = await CurrentMovie.findByIdAndDelete(req.params.id)
        res.status(201).json(currentMovie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update CurrentMovie
const updateCurrentMovie = async (req, res) => {
    try {
        const currentMovie = await CurrentMovie.findByIdAndUpdate(req.params.id)
        res.status(201).json(currentMovie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getCurrentMovies,
    getCurrentMovie,
    createCurrentMovie,
    removeCurrentMovie,
    updateCurrentMovie
}
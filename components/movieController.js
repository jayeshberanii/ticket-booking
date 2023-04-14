const Actor = require("../models/ActorsModel")
const Movie = require("../models/MovieModel")
const Producer = require("../models/ProducerModel")

//get movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().populate("actors", "name country").populate('producer', "name country")
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create movie
const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get movie
const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate("actors", "name").populate('producer', "name")
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove movie
const removeMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id)
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update movie
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id)
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Movies By Actor
const getMoviesByActor = async (req, res) => {
    try {
        const movies = await Actor.aggregate([
            {
                $match: {
                    name: req.body.name
                }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: "_id",
                    foreignField: "actors",
                    as: "actor_movies"
                }
            },
            {
                $project: {
                    name: 1,
                    actor_movies: 1
                }
            }
        ])

        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getMovies,
    getMovie,
    createMovie,
    removeMovie,
    updateMovie,
    getMoviesByActor
}
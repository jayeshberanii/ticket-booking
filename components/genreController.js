const Genre = require("../models/GenreModel")

//get genres
const getGenre = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.status(200).json(genres)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//add genres
const addGenres = async (req, res) => {
    try {
        const { genreName } = req.body
        const genres = await Genre.find()
        if (genres.length > 0) {
            const isUpdate=await Genre.findByIdAndUpdate(genres[0]._id, {
                $push: { genre: genreName }
            },{ returnDocument: 'after' },)
            res.status(200).json({genre:isUpdate})
        } else {
            const genre=await new Genre({
                genre:[genreName]
            })
            await genre.save()
            res.status(200).json(genre)
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove genre
const removeGenres = async (req, res) => {
    try {
        const { genreName } = req.body
        const genres = await Genre.find()
        if (genres.length > 0) {
            const isUpdate=await Genre.findByIdAndUpdate(genres[0]._id, {
                $pull: { genre: genreName }
            },{ returnDocument: 'after' },)
            res.status(200).json({genre:isUpdate})
        } else {
            const genre=await new Genre({
                genre:[genreName]
            })
            await genre.save()
            res.status(200).json(genre)
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getGenre,
    addGenres,
    removeGenres
}
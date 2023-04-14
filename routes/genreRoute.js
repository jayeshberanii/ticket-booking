const { addGenres, getGenre, removeGenres } = require('../components/genreController')

const route=require('express').Router()

route.get('/',getGenre)
route.post('/',addGenres)
route.delete('/',removeGenres)

module.exports=route
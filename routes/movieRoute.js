const { getMovies, getMovie, createMovie, removeMovie, updateMovie, getMoviesByActor } = require('../components/movieController')

const route=require('express').Router()

route.get('/',getMovies)
route.get('/:id',getMovie)
route.post('/',createMovie)
route.delete('/:id',removeMovie)
route.put('/:id',updateMovie)
route.post('/get-actor',getMoviesByActor)
module.exports=route
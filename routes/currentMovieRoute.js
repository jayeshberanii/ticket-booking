const { updateCurrentMovie, removeCurrentMovie, createCurrentMovie, getCurrentMovie, getCurrentMovies } = require('../components/currentMovieConroller')

const route=require('express').Router()

route.get('/',getCurrentMovies)
route.get('/:id',getCurrentMovie)
route.post('/',createCurrentMovie)
route.delete('/:id',removeCurrentMovie)
route.put('/:id',updateCurrentMovie)

module.exports=route
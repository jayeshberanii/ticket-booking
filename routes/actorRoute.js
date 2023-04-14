const { getActors, getActor, createActor, updateActor, removeActor, getMoviesByActor } = require('../components/actorController')

const route=require('express').Router()

route.get('/',getActors)
route.get('/:id',getActor)
route.post('/',createActor)
route.put('/:id',updateActor)
route.delete('/:id',removeActor)
route.post('/get-movies',getMoviesByActor)

module.exports=route
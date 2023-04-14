const { getCinemas, getCinema, createCinema, removeCinema, updateCinema } = require('../components/cinemaController')

const route=require('express').Router()

route.get('/',getCinemas)
route.get('/:id',getCinema)
route.post('/',createCinema)
route.delete('/:id',removeCinema)
route.put('/:id',updateCinema)

module.exports=route
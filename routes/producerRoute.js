const { getProducers, getProducer, createProducer, updateProducer, removeProducer } = require('../components/producerController')

const route=require('express').Router()

route.get('/',getProducers)
route.get('/:id',getProducer)
route.post('/',createProducer)
route.put('/:id',updateProducer)
route.delete('/:id',removeProducer)

module.exports=route
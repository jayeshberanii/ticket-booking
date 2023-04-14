const { getScreens, getScreen, createScreen, removeScreen, updateScreen } = require('../components/screenController')

const route=require('express').Router()

route.get('/',getScreens)
route.get('/:id',getScreen)
route.post('/',createScreen)
route.delete('/:id',removeScreen)
route.put('/:id',updateScreen)

module.exports=route
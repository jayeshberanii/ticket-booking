const { getUsers, getUser, createUser, updateUser, removeUser } = require('../components/userController')


const route=require('express').Router()

route.get('/',getUsers)
route.get('/:id',getUser)
route.post('/',createUser)
route.put('/:id',updateUser)
route.delete('/:id',removeUser)

module.exports=route
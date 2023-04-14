const User = require("../models/UserModel")

//create user
const createUser=async(req,res)=>{
    try {
        const user=await new User(req.body)
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get user
const getUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get users
const getUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove user
const removeUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update user
const updateUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,{

        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports={
    createUser,
    getUser,
    getUsers,
    removeUser,
    updateUser
}
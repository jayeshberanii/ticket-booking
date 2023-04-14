const Screen = require("../models/ScreensModel")

//get Screens
const getScreens=async(req,res)=>{
    try {
        const screens=await Screen.find()
        res.status(200).json(screens)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create Screen
const createScreen=async(req,res)=>{
    try {
        const screen=await Screen.create(req.body)
        res.status(201).json(screen)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Screen
const getScreen=async(req,res)=>{
    try {
        const screen=await Screen.findById(req.params.id)
        res.status(201).json(screen)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove Screen
const removeScreen=async(req,res)=>{
    try {
        const screen=await Screen.findByIdAndDelete(req.params.id)
        res.status(201).json(screen)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update Screen
const updateScreen=async(req,res)=>{
    try {        
        const screen=await Screen.findByIdAndUpdate(req.params.id)
        res.status(201).json(screen)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports={
    getScreens,
    getScreen,
    createScreen,
    removeScreen,
    updateScreen
}
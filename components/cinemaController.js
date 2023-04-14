const Cinema = require("../models/CinemaModel")

//get Cinemas
const getCinemas=async(req,res)=>{
    try {
        const cinemas=await Cinema.find()
        res.status(200).json(cinemas)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create Cinema
const createCinema=async(req,res)=>{
    try {
        const cinema=await Cinema.create(req.body)
        res.status(201).json(cinema)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Cinema
const getCinema=async(req,res)=>{
    try {
        const cinema=await Cinema.findById(req.params.id)
        res.status(201).json(cinema)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove Cinema
const removeCinema=async(req,res)=>{
    try {
        const cinema=await Cinema.findByIdAndDelete(req.params.id)
        res.status(201).json(cinema)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update Cinema
const updateCinema=async(req,res)=>{
    try {        
        const cinema=await Cinema.findByIdAndUpdate(req.params.id)
        res.status(201).json(cinema)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports={
    getCinemas,
    getCinema,
    createCinema,
    removeCinema,
    updateCinema
}
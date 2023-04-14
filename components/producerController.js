const Producer = require("../models/ProducerModel")


//get Producers
const getProducers=async(req,res)=>{
    try {
        const producers=await Producer.find()
        res.status(200).json(producers)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create Producer
const createProducer=async(req,res)=>{
    try {
        const producer=await Producer.create(req.body)
        res.status(201).json(producer)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Producer
const getProducer=async(req,res)=>{
    try {
        const producer=await Producer.findById(req.params.id)
        res.status(201).json(producer)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove Producer
const removeProducer=async(req,res)=>{
    try {
        const producer=await Producer.findByIdAndDelete(req.params.id)
        res.status(201).json(producer)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update Producer
const updateProducer=async(req,res)=>{
    try {        
        const producer=await Producer.findByIdAndUpdate(req.params.id)
        res.status(201).json(producer)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports={
    getProducers,
    getProducer,
    createProducer,
    removeProducer,
    updateProducer
}
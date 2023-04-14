const Actor = require("../models/ActorsModel")


//get Actors
const getActors=async(req,res)=>{
    try {
        const actors=await Actor.find()
        res.status(200).json(actors)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//create Actor
const createActor=async(req,res)=>{
    try {
        const actor=await Actor.create(req.body)
        res.status(201).json(actor)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Actor
const getActor=async(req,res)=>{
    try {
        const actor=await Actor.findById(req.params.id)
        res.status(201).json(actor)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//remove Actor
const removeActor=async(req,res)=>{
    try {
        const actor=await Actor.findByIdAndDelete(req.params.id)
        res.status(201).json(actor)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//update Actor
const updateActor=async(req,res)=>{
    try {        
        const actor=await Actor.findByIdAndUpdate(req.params.id)
        res.status(201).json(actor)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get Movies By Actor
const getMoviesByActor = async (req, res) => {
    try {
        const movies = await Actor.aggregate([
            {
                $match: {
                    name: {$regex:req.body.name}
                }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: "_id",
                    foreignField: "actors",
                    as: "actor_movies"
                }
            },
            {
                $project: {
                    name: 1,
                    actor_movies: {
                        title:1
                    }
                }
            }
        ])

        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports={
    getActors,
    getActor,
    createActor,
    removeActor,
    updateActor,
    getMoviesByActor
}
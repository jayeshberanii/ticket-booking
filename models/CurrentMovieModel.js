const mongoose=require('mongoose')

const currentMoviesSchema=new mongoose.Schema({
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movies"
    },
    showTime:{
        type:String,
        required:true
    },
    cinema:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cinemas"
    },
    screen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screens"
    },
},{
    timestamps:true
})
const CurrentMovie=new mongoose.model('currentMovies',currentMoviesSchema)
module.exports=CurrentMovie
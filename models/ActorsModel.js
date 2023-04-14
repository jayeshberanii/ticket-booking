const mongoose=require('mongoose')

const actorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    birth:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
},{
    timestamps:true
})
const Actor=new mongoose.model('actors',actorSchema)
module.exports=Actor
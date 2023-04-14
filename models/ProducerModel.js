const mongoose=require('mongoose')

const producerSchema=new mongoose.Schema({
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
const Producer=new mongoose.model('producers',producerSchema)
module.exports=Producer
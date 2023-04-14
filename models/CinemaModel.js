const mongoose=require('mongoose')

const cinemaSchema=new mongoose.Schema({
    name:{
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
    pinCode:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
},{
    timestamps:true
})
const Cinema=new mongoose.model('cinemas',cinemaSchema)
module.exports=Cinema
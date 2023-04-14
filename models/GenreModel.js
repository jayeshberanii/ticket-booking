const mongoose=require('mongoose')

const genreSchema=new mongoose.Schema({
    genre:{
        type:Array
    }
},{
    timestamps:true
})
const Genre=new mongoose.model('genres',genreSchema)
module.exports=Genre
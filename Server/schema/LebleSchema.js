const mongoose=require('mongoose')

const Schema=mongoose.Schema

const LebleSchema= new Schema({
    lebleName:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('leble',LebleSchema)
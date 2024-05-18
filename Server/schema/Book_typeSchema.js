const mongoose=require('mongoose')

const Schema=mongoose.Schema

const Book_typeSchema= new Schema({
    Book_typeName:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('Book_type',Book_typeSchema)
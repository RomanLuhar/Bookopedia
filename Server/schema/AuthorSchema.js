const mongoose=require('mongoose')

const Schema=mongoose.Schema

const AuthorSchema= new Schema({
    authorName:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('author',AuthorSchema)
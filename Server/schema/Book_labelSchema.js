const mongoose=require('mongoose')

const Schema=mongoose.Schema

const Book_lebleSchema= new Schema({
    
    labelId:{
        type:Schema.Types.ObjectId,
        ref:'leble'
    },
    bookId:{
        type:Schema.Types.ObjectId,
        ref:'book'
    }   
   
})

module.exports=mongoose.model('book_leble',Book_lebleSchema)
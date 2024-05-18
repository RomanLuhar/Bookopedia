const mongoose=require('mongoose')

const Schema=mongoose.Schema

const BookSchema= new Schema({
    title:{
        type: String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    price:{
        type:String,
        required:true
    },
    isChairty:{
        type:Boolean    
    }
   
})

module.exports=mongoose.model('book',BookSchema)
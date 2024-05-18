const mongoose=require('mongoose')

const Schema=mongoose.Schema

const Book_bidSchema= new Schema({
    
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    bookId:{
        type:Schema.Types.ObjectId,
        ref:'book'
    } ,
    amount:{
        type:String,

    }, 
    isAccepted:{
        type:Boolean
    } ,
    falseBid:{
        type:Boolean
    }
   
})

module.exports=mongoose.model('Book_bid',Book_bidSchema)
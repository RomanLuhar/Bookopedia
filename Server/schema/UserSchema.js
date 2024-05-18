const mongoose=require('mongoose')

const Schema=mongoose.Schema

const UserSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        
    }, 
    gender:{
        type:String
    },
    role:{
       type:Schema.Types.ObjectId,
       ref:'role'
    }
})

module.exports=mongoose.model('user',UserSchema)
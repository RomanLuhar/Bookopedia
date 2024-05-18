const Book_lebleSchema=require('../schema/Book_labelSchema')


const addBookL= (req,res)=>{

    const Book=new Book_lebleSchema(req.body)

    Book.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding Book_leble..."
            })
        }else{
            res.status(200).json({
                message:"Book_leble added successfullly...",
                data:data
            })  
        
        }
    })
}

const getBookL=(req,res)=>{

    Book_lebleSchema.find().populate('bookId').exec((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found Book_leble.."

            })
        }else{
            res.status(200).json({
                message:"Book_leble found successfully...",
                data:data
            })
        }
    })
}


  
    
module.exports={
    addBookL,
    getBookL

}
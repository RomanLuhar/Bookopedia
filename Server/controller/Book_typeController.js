const Book_typeSchema=require('../schema/Book_typeSchema')


const addBookT= (req,res)=>{

    const BookT=new Book_typeSchema(req.body)

    BookT.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding Book_type ..."
            })
        }else{
            res.status(200).json({
                message:"Book_type added successfullly...",
                data:data
            })  
        
        }
    })
}

const getBookT=(req,res)=>{

    Book_typeSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found Book_type.."

            })
        }else{
            res.status(200).json({
                message:"Book_type found successfully...",
                data:data
            })
        }
    })
}


  
    
module.exports={
    addBookT,
    getBookT

}
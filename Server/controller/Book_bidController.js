const Book_bidSchema=require('../schema/Book_bidSchema')


const addBookB= (req,res)=>{

    const BookB=new Book_bidSchema(req.body)

    BookB.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding Book_bid..."
            })
        }else{
            res.status(200).json({
                message:"Book_bid added successfullly...",
                data:data
            })  
        
        }
    })
}

const getBookB=(req,res)=>{

    Book_bidSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found Book_bid.."

            })
        }else{
            res.status(200).json({
                message:"Book_bid found successfully...",
                data:data
            })
        }
    })
}


  
    
module.exports={
    addBookB,
    getBookB

}
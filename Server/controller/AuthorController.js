const AuthorSchema=require('../schema/AuthorSchema')


const addAuth= (req,res)=>{

    const author=new AuthorSchema(req.body)

    author.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding author..."
            })
        }else{
            res.status(200).json({
                message:"author added successfullly...",
                data:data
            })  
        
        }
    })
}

const getAuth=(req,res)=>{

    AuthorSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found Author.."

            })
        }else{
            res.status(200).json({
                message:"author found successfully...",
                data:data
            })
        }
    })
}

module.exports={
    addAuth,
    getAuth

}
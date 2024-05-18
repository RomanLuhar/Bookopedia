const LebleSchema=require('../schema/LebleSchema')


const addLeb= (req,res)=>{

    const leble=new LebleSchema(req.body)

    leble.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding leble..."
            })
        }else{
            res.status(200).json({
                message:"leble added successfullly...",
                data:data
            })  
        
        }
    })
}

const getLeb=(req,res)=>{

    LebleSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found leble.."

            })
        }else{
            res.status(200).json({
                message:"leble found successfully...",
                data:data
            })
        }
    })
}

module.exports={
    addLeb,
    getLeb

}
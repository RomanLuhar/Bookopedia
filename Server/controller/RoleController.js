const RoleSchema=require('../schema/RoleSchema')


const addRole=(req,res)=>{
    const role=new RoleSchema(req.body)

    role.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in addding role..."
            })
        }else {
            res.status(200).json({
                message:"role added successfully",
                data:data
            })
        }
    })
}

const getRole=(req,res)=>{
    RoleSchema.find((err,data)=>{
        if (err) {
            res.status(404).json({
                message: "Role not found...."
            })
        } else {
            res.status(200).json({
                message: "Role found successfully....",
                data:data
            })
        }
    })
}


module.exports={
    addRole,
    getRole
}
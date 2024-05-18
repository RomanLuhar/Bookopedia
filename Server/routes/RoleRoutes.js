const express=require('express')
const router=express.Router()

const RoleControler=require('../controller/RoleController')

router.get('/get',RoleControler.getRole)
router.post('/add',RoleControler.addRole)


module.exports=router
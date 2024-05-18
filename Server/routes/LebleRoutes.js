const express=require('express')

const router=express.Router()

const LebleController=require('../controller/LebleController')

router.post('/add',LebleController.addLeb)
router.get('/get',LebleController.getLeb)


module.exports=router
const express=require('express')

const router=express.Router()

const AuthorController=require('../controller/AuthorController')

router.post('/add',AuthorController.addAuth)
router.get('/get',AuthorController.getAuth)


module.exports=router
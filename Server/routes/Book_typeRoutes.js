const express=require('express')

const router=express.Router()

const Book_typeController=require('../controller/Book_typeController')

router.post('/add',Book_typeController.addBookT)
router.get('/get',Book_typeController.getBookT)


module.exports=router
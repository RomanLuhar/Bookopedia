const express=require('express')

const router=express.Router()

const Book_lebleController=require('../controller/Book_lebleController')

router.post('/add',Book_lebleController.addBookL)
router.get('/get',Book_lebleController.getBookL)


module.exports=router
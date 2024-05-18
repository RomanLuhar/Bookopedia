const express=require('express')

const router=express.Router()

const Book_bidController=require('../controller/Book_bidController')

router.post('/add',Book_bidController.addBookB)
router.get('/get',Book_bidController.getBookB)


module.exports=router
const express=require('express')

const router=express.Router()

const BookController=require('../controller/BookController')

router.post('/add',BookController.addBook)
router.get('/get',BookController.getBook)
router.put('/put',BookController.updateBook)
router.get('/get/:id',BookController.getBookById)
router.delete('/get/:id',BookController.deleteBook)

module.exports=router
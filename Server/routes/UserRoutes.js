const express=require('express')
const router=express.Router()
const UserController=require('../controller/UserController')

router.post('/add',UserController.AddUser)
router.get('/get',UserController.getUser)
router.put('/put',UserController.updateUser)
router.get('/get/:id',UserController.getUserById)
router.delete('/get/:id',UserController.deleteUser)
router.post('/add/login',UserController.loginUser)

module.exports=router;
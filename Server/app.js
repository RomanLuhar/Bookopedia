const mongoose=require('mongoose')  /*MONGOOSE AND EXPRESS REQUIRE AND USE ....*/
const express=require('express')
const cors = require('cors')


const app =express()
app.use(cors())
app.use(express.json())

const UserRoutes=require('./routes/UserRoutes')
const RoleRoutes=require('./routes/RoleRoutes')
const LebleRoutes=require('./routes/LebleRoutes')
const BookRoutes=require('./routes/BookRoutes')
const Book_lebleRoutes=require('./routes/Book_lebleRoutes')
const Book_bidRoutes=require('./routes/Book_bidRoutes')
const Book_typeRoutes=require('./routes/Book_typeRoutes')


app.use('/user',UserRoutes)
app.use('/role',RoleRoutes)
app.use('/leb',LebleRoutes)
app.use('/book',BookRoutes)
app.use('/bookL',Book_lebleRoutes)
app.use('/bookB',Book_bidRoutes)
app.use('/bookT',Book_typeRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/Book",{},  (err)=>{
    if(err){
      console.log("error in database connection........")
    }else
    {
       console.log("db connected successfully.....")

    }
})

const PORT=4500
app.listen(PORT,()=>{
    console.log("server is running at port number ",PORT)
})
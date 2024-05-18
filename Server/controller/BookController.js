const BookSchema=require('../schema/BookSchema')


const addBook= (req,res)=>{

    const Book=new BookSchema(req.body)

    Book.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in adding Book..."
            })
        }else{
            res.status(200).json({
                message:"Book added successfullly...",
                data:data
            })  
        
        }
    })
}

const getBook=(req,res)=>{

    BookSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"error in found Book.."

            })
        }else{
            res.status(200).json({
                message:"Book found successfully...",
                data:data
            })
        }
    })
}


const getBookById = (req, res) => {

    var id = req.params.id

    BookSchema.findById(id,(err, data) => {
        if (err) {
            res.status(404).json({ 
                message: "error in found Book.."
            })
        } else {
            res.status(200).json({
                message: "Book found successfully...",
                data: data
            })
 
        }
    })
}



const updateBook = (req, res) => {
    const id = req.params.id

    BookSchema.findByIdAndUpdate(id, (err,data) => {
        if (err) {
            res.status(404).json({
                message: "error in updating Book"
            })
        } else {
            res.status(200).json({
                message: "Book upadate successfully...",
                data:data
            })
        }
    })
}

const deleteBook = (req, res) => {
    const id = req.params.id

    BookSchema.findByIdAndRemove(id, (err,data) => {
        if (err) {
            res.status(404).json({
                message: "error in removing Book"
            })
        } else {
            res.status(200).json({
                message: "Book remove successfully...",
                data:data
            })
        }
    })
}


  
    
module.exports={
    addBook,
    getBook,
    getBookById,
    updateBook,
    deleteBook,

}
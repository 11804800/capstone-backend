const multer=require('multer');
const path=require("path");

//for uploading files in public/images folder
const FileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

//crating upload object 
const Upload=multer({storage:FileStorage});


//exporting 
module.exports={
    Upload
}
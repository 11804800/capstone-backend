const express=require('express');
const bodyparser=require("body-parser");
const { GetAllVideos, InsertNewVideo, UpdateVideoById, DeleteVideoById, DeleteAllVideo, PostComment, DeleteCommentById, UpdateCommentById, DeleteAllComment,UploadVideo } = require('../controller/video.controller');
const VideoRouter=express.Router();
VideoRouter.use(bodyparser.json());
const { VerifyUser } = require('../middleware/Authentication');
const { Upload } = require('../middleware/Upload');



//for getting all videos
VideoRouter.get("/",VerifyUser,GetAllVideos);

//for inserting new video
VideoRouter.post("/",VerifyUser,Upload.single("image"),InsertNewVideo);

//for Updating the Video details
VideoRouter.put("/:id",VerifyUser,Upload.single("image"),UpdateVideoById);

//for uploading video
VideoRouter.put("/:name/upload",VerifyUser,Upload.single("video"),UploadVideo);

//for Deleting the videos by id
VideoRouter.delete("/:title",VerifyUser,DeleteVideoById);

//for Deleting all the videos
VideoRouter.delete("/",VerifyUser,DeleteAllVideo);

//for Inserting new Comment
VideoRouter.post("/:id/comment",VerifyUser,PostComment);


//for Updating the Comment by id
VideoRouter.put("/:id/comment/:commentid",VerifyUser,UpdateCommentById);

//for deleting all the comment
VideoRouter.delete("/:id/comment",VerifyUser,DeleteAllComment);

//for Deleting the Comment by id
VideoRouter.delete("/:id/comment/:commentid",VerifyUser,DeleteCommentById);


module.exports=VideoRouter;
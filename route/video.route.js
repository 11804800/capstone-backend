const express=require('express');
const bodyparser=require("body-parser");
const { GetAllVideos, InsertNewVideo, UpdateVideoById, DeleteVideoById, DeleteAllVideo, PostComment, DeleteCommentById, UpdateCommentById, DeleteAllComment } = require('../controller/video.controller');
const VideoRouter=express.Router();
VideoRouter.use(bodyparser.json());

//for getting all videos
VideoRouter.get("/",GetAllVideos);

//for inserting new video
VideoRouter.post("/",InsertNewVideo);

//for Updating the Video
VideoRouter.put("/:id",UpdateVideoById);

//for Deleting the videos by id
VideoRouter.delete("/:id",DeleteVideoById);

//for Deleting all the videos
VideoRouter.delete("/",DeleteAllVideo);

//for Inserting new Comment
VideoRouter.post("/:id/comment",PostComment);


//for Updating the Comment by id
VideoRouter.put("/:id/comment/:commentid",UpdateCommentById);

//for deleting all the comment
VideoRouter.delete("/:id/comment",DeleteAllComment);

//for Deleting the Comment by id
VideoRouter.delete("/:id/comment/:commentid",DeleteCommentById);


module.exports=VideoRouter;
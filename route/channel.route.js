const express=require('express');
const bodyparser=require("body-parser");
//controller functions
const { GetAllChannel, PostNewChannel, UpdateChannel, DeleteChannel, PushVideo, DeleteVideo } = require('../controller/channel.controller');
//middleware defined to verify the user
const { VerifyUser } = require('../middleware/Authentication');
const { Upload } = require('../middleware/Upload');


const ChannelRouter=express.Router();
ChannelRouter.use(bodyparser.json());

//for getting the Channel Data from database
ChannelRouter.get("/",VerifyUser,GetAllChannel);

//for posting the channel data 
ChannelRouter.post("/",VerifyUser,Upload.single("image"),PostNewChannel);

//for updating the channel record
ChannelRouter.put("/:name",VerifyUser,Upload.single("image"),UpdateChannel);

//for Deleting the channel record
ChannelRouter.delete("/:name",VerifyUser,DeleteChannel);

//for adding new video to channel
ChannelRouter.post("/:name/video",PushVideo);

//for deleting the video
ChannelRouter.delete("/:name/video/:videoId",DeleteVideo);

module.exports=ChannelRouter;
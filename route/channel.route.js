const express=require('express');
const bodyparser=require("body-parser");
//controller functions
const { GetAllChannel, PostNewChannel, UpdateChannel, DeleteChannel } = require('../controller/channel.controller');
//middleware defined to verify the user
const { VerifyUser } = require('../middleware/Authentication');

const ChannelRouter=express.Router();
ChannelRouter.use(bodyparser.json());

//for getting the Channel Data from database
ChannelRouter.get("/",VerifyUser,GetAllChannel);

//for posting the channel data 
ChannelRouter.post("/",VerifyUser,PostNewChannel);

//for updating the channel record
ChannelRouter.put("/:name",VerifyUser,UpdateChannel);

//for Deleting the channel record
ChannelRouter.delete("/:name",VerifyUser,DeleteChannel);

module.exports=ChannelRouter;
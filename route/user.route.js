const express = require("express");
const bodyparser = require("body-parser");
const {
  GetUser,
  Signup,
  Login,
  UpdateUserInfo,
  DeleteUser,
  UserSignup,
  UserLogin,
  Subscribe,
  UnSubscribe,
  CreateChannel,
  DeleteChannel,
} = require("../controller/user.controller");
const UserRouter = express.Router();
UserRouter.use(bodyparser.json());
const {Upload}=require("../middleware/Upload");

//for getting the user info
UserRouter.get("/", GetUser);

//post method for signup 
UserRouter.post("/signup", Upload.single("image"),UserSignup);

//post method for login
UserRouter.post("/login", UserLogin);

//put method to update the user info
UserRouter.put("/:username",Upload.single("image"), UpdateUserInfo);

//delete Method for deleting the user info
UserRouter.delete("/", DeleteUser);

//Subscribing
UserRouter.post("/:username/subscribe",Subscribe);

//unsubcribing
UserRouter.delete("/:username/unsubcribe/:ChannelId",UnSubscribe);

//adding created channel route
UserRouter.post("/:username/channel",CreateChannel);

//deleting created channel route
UserRouter.delete("/:username/channel/:ChannelId",DeleteChannel);


//exporting the userrouter
module.exports = UserRouter;

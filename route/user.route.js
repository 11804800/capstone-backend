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
} = require("../controller/user.controller");
const UserRouter = express.Router();
UserRouter.use(bodyparser.json());

//for getting the user info
UserRouter.get("/", GetUser);

//post method for signup 
UserRouter.post("/signup", UserSignup);

//post method for login
UserRouter.post("/login", UserLogin);

//put method to update the user info
UserRouter.put("/:username", UpdateUserInfo);

//delete Method for deleting the user info
UserRouter.delete("/", DeleteUser);


//exporting the userrouter
module.exports = UserRouter;

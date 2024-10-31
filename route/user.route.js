const express = require("express");
const bodyparser = require("body-parser");
const { GetUser } = require("../controller/user.controller");
const UserRouter = express.Router();
UserRouter.use(bodyparser.json());


UserRouter.get("/",GetUser);

module.exports = UserRouter;

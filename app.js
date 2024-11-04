const express=require('express');
const app=new express();
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
const UserRouter = require('./route/user.route');
const ChannelRouter = require('./route/channel.route');
const VideoRouter = require('./route/video.route');



//connecting to monogdb
mongoose
  .connect("mongodb://localhost:27017/youtube")
  .then((db) => {
    //it console this if connected successfully
    console.log("Connection Successfull");
  })
  //else console err if the any error occurs in connection
  .catch((err) => console.log(err));

app.use(express.json());
app.use(bodyparser.json());

//for logging all the api requests  
app.use((req, res, next) => {
    console.log(req.method + "  URL:" + req.url + " " + res.statusCode);
    next();
  });

app.use("/user",UserRouter);
app.use("/channel",ChannelRouter);
app.use("/video",VideoRouter);

//listening to the server at port 3000
app.listen(3000,()=>{
    console.log("Server is up and running at 3000")
});
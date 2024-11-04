const VideoSchema = require("../model/video.model");

//for getting all the videos
async function GetAllVideos(req, res) {
  try {
    const result = await VideoSchema.find({}).populate("uploader");
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

//for inserting new video
async function InsertNewVideo(req, res) {
  try {
    const result = await VideoSchema.insertMany({
      title: req.body.title,
      description: req.body.description,
      uploader: req.body.uploader,
      views: req.body.views,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      uploadDate: new Date(),
      category: req.body.category,
      Url: req.body.url,
      comments: req.body.comments,
    });
    res.status(201).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

//for updating the video
async function UpdateVideoById(req, res) {
  try {
    const result = await VideoSchema.findByIdandUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}


//for Deleting the video by id
async function DeleteVideoById(req, res) {
  try {
    //finding the video by id and then deleting it
    const result=await VideoSchema.findByIdandDelete({_id:req.params.id});
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}


//for deleting all the videos
async function DeleteAllVideo(req, res) {
  try {
    //deleteMany function for deleting all the videos
    const result =await VideoSchema.deleteMany();
    //responsing
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}


//for inserting the new comment
//for nested comment i have used promise to find the video by id and then 
//push the comment data to that video's comment
function PostComment(req,res){
  //finding the comment by id
  VideoSchema.findById(req.params.id).then((video)=>{
    //pushing the data value
    video.comments.push(req.body);
    //saving the comment data
    video.save();
    //creating response
    res.status(201).json({video:video});
    //error handling
  },(err)=>res.status(500).json({err:err})).
  catch((err)=>res.status(500).json({err:err.message}));
}


//for deleting the comment by id
function DeleteCommentById(req,res)
{
  VideoSchema.findById(req.params.id).then((video)=>{
    //removing where the id of the comment matches with the commentid
    video.comments.remove({_id:req.params.commentid});
    //saving the changes
    video.save();
    //responsing
    res.status(200).json({video:video});
  },(err)=>res.status(500).json({err:err}))
  .catch((err)=>res.status(500).json({err:err.message}));
}

//for deleting all the comment
function DeleteAllComment(req,res)
{
  VideoSchema.findById(req.params.id).then((video)=>{
    //setting the comments to an empty array
    video.comments=[];
    //saving the change to db
    video.save();
    //responsing
    res.status(200).json({video:video});
  },(err)=>res.status(500).json({err:err}))
  .catch((err)=>res.status(500).json({err:err.message}));
}

//for updating the comment
function UpdateCommentById(req,res)
{
  VideoSchema.findById(req.params.id).then((video)=>{
    //only text is muttable so it needs to be there
    if(req.body.text)
    {
      //finding the comment by id and then updating the text
      video.comments.id(req.params.commentid).text=req.body.text;
    }
    //saving the changes
    video.save();
    //responsing
    res.status(200).json({video:video});
  },(err)=>res.status(500).json({err:err.message}))
  .catch((err)=>res.status(500).json({err:err.message}));
}

module.exports = {
  GetAllVideos,
  PostComment,
  DeleteAllVideo,
  DeleteVideoById,
  UpdateVideoById,
  InsertNewVideo,
  DeleteCommentById,
  DeleteAllComment,
  UpdateCommentById
};

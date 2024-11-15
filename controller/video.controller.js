const { DateFormat } = require("../middleware/Format");
const VideoSchema = require("../model/video.model");

//for getting all the videos
function GetAllVideos(req, res) {
  //populating fields will give required enough data to show channel info
  VideoSchema.find({})
    .populate({
      path: "channelId",
      model: "channelSchema",
      select: "image Subscriber_Count verified",
      foreignField: "name",
    })
    //this will populate the user in comments and will give info like email avatar
    .populate({
      path: "comments.userId",
      model: "user",
      select: "avatar email",
      foreignField: "username",
    })
    .then(
      (video) => {
        const filterCategory = [...new Set(video.map((item) => item.Category))];
        res.status(200).json({ video: video, filterCategory: filterCategory });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//for inserting new video
async function InsertNewVideo(req, res) {
  try {
    const date = new Date();
    const result = await VideoSchema.insertMany({
      title: req.body.title,
      description: req.body.description,
      uploader: req.body.uploader,
      views: req.body.views,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      uploadDate: req.body.uploadDate
        ? req.body.uploadDate
        : DateFormat.format(date),
      Category: req.body.Category,
      Url: req.body.Url,
      comments: req.body.comments,
      thumbnailUrl: req?.file?.filename
        ? `http://localhost:3000/images/${req?.file?.filename}`
        : req.body.thumbnailUrl,
      channelId: req.body.channelId,
    });
    res.status(201).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

//for updating the video
async function UpdateVideoById(req, res) {
  try {
    const result = await VideoSchema.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      {
        new: true,
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
    const result = await VideoSchema.findOneAndDelete({
      title: req.params.title,
    });
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

//for deleting all the videos
async function DeleteAllVideo(req, res) {
  try {
    //deleteMany function for deleting all the videos
    const result = await VideoSchema.deleteMany();
    //responsing
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

//for inserting the new comment
//for nested comment i have used promise to find the video by id and then
//push the comment data to that video's comment
function PostComment(req, res) {
  //finding the comment by id
  VideoSchema.findById(req.params.id)
    .then(
      (videos) => {
        //pushing the data value in front
        videos.comments.push(req.body);
        //saving the comment data
        videos.save();
        
        res.status(201).json({ videos: videos?.comments });
      },
      (err) => res.status(500).json({ err: err })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//for deleting the comment by id
function DeleteCommentById(req, res) {
  VideoSchema.findById(req.params.id)
    .then(
      (video) => {
        //removing where the id of the comment matches with the commentid
        video.comments.remove({ _id: req.params.commentid });
        //saving the changes
        video.save();
        //responsing
        res.status(200).json({ video: video });
      },
      (err) => res.status(500).json({ err: err })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//for deleting all the comment
function DeleteAllComment(req, res) {
  VideoSchema.findById(req.params.id)
    .then(
      (video) => {
        //setting the comments to an empty array
        video.comments = [];
        //saving the change to db
        video.save();
        //responsing
        res.status(200).json({ video: video });
      },
      (err) => res.status(500).json({ err: err })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//for updating the comment
function UpdateCommentById(req, res) {
  VideoSchema.findById(req.params.id)
    .populate({
      path: "comments.userId",
      model: "user",
      select: "avatar email",
      foreignField: "username",
    })
    .then(
      (video) => {
        //setting the text
        video.comments.id(req.params.commentid).text = req.body.text;
        //saving the changes
        video.save();
        //responsing
        res
          .status(200)
          .json({ video: video.comments.id(req.params.commentid) });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

async function UploadVideo(req, res) {
  try {
    const result=await VideoSchema.findOneAndUpdate(
      {
        title: req.params.name
      },
      {
        $set: {
          Url: `http://localhost:3000/images/${req.file.filename}`,
        }
      },
      {
        new: true,
      }
    );

    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
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
  UpdateCommentById,
  UploadVideo,
};

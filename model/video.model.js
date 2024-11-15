const mongoose = require("mongoose");


const CommentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const VideoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    //this will give all the info of the channel
    channelId: {
      type: String,
      required: true,
    },
    uploader: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },

    thumbnailUrl: {
      type:String,
      required:true
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    uploadDate: {
      type: String,
    },
    //category for filtering the video
    Category: {
      type: String,
      required: true,
    },
    //youtube video url
    Url: {
      type: String
    },
    comments: [CommentSchema],
    //true will allow the user to comment false will turn off the comments and no comments will be shown
    commentAllowed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("videos", VideoSchema);

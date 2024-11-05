const mongoose = require("mongoose");

const ChannelSchema = mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    banner:{
        type:String
    },
    image:{
        type:String
    },
    Subscriber_Count:{
        type:Number,
        default:0
    },
    verified:{
        type:Boolean,
        default:false
    },
    //it will store only the ids of the videos
    videos:[

    ],
    //it will store the creator info
    creator:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("channelSchema", ChannelSchema);

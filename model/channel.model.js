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

    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("channelSchema", ChannelSchema);

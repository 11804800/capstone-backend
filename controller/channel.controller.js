const ChannelSchema = require("../model/channel.model");


//getting all the channel data from the collection
async function GetAllChannel(req, res) {
  try {
    //finding the data from channel collection from db
    const data = await ChannelSchema.find({}).populate("creator");
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

//Inserting new channel data to the collection
async function PostNewChannel(req, res) {
  try {
    const result = await ChannelSchema.create({
      name: req.body.name,
      description: req.body.description,
      banner: req.body.banner,
      image: req.body.image,
      Subscriber_Count: req.body.subscribers,
      verified: req.body.verified,
      videos: req.body.videos,
      creator:req.user.user?._id
    });
    res.status(201).json({ result: result ,user:req.user});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

//updating the existing channel record in the collection finding by name
async function UpdateChannel(req, res) {
  try {
    const result = await ChannelSchema.findOneAndUpdate(
      { name: req.params.name },
      {
        $set: req.body,
      }
    );
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

//deleting the channel record finding by name
async function DeleteChannel(req, res) {
  try {
    const result = await ChannelSchema.findOneAndDelete({
      name: req.params.name,
    });
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}


//creating new video
function PushVideo(req,res)
{
  ChannelSchema.findById(req.params.id).then((channel)=>{
    channel.videos.push(req.body.id);
    channel.save();
    res.status(201).json({channel:channel});
  },(err)=>res.status(500).json({err:err.message})).
  catch((err)=>res.status(500).json({err:err.message}));
}

//delete Video
function DeleteVideo(req,res)
{
  ChannelSchema.findById(req.params.id).then((channel)=>{
    channel.videos.remove(req.params.videoId);
    channel.save();
    res.status(201).json({channel:channel});
  },(err)=>res.status(500).json({err:err.message})).
  catch((err)=>res.status(500).json({err:err.message}));
}

//exporting 
module.exports = {
  GetAllChannel,
  PostNewChannel,
  UpdateChannel,
  DeleteChannel,
  PushVideo,
  DeleteVideo
};

const User=require("../model/user.model");

async function GetUser(req,res)
{
    try
    {
        const result=await User.findOne({username:req.body.username});
        res.status(200).json({result:result});
    }
    catch(err)
    {
        res.status(500).json({err:err.message})
    }
}


module.exports={
    GetUser
};
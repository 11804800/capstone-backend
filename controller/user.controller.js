const User = require("../model/user.model");
//encrypting library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function GetUser(req, res) {
  try {
    const result=await User.findOne({username:req.query.username});
    res.status(200).json({ result: result });
  } catch (err) {
    //Error Response when occur
    res.status(500).json({ err: err.message });
  }
}

async function UserSignup(req, res) {
  try {
    //check if the user already exists
    const isUserExist = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    //if exists then return it is forbidden request
    if (isUserExist) {
      res.status(403).json({ message: "Username or Email Already Exists" });
    }
    //else encrypt the password and store it to the database
    else {
      const password = req.body.password;

      //encrypting the password while restoring it to the database
      //it takes two argument 1st data to encrypt 2nd the salt size to generate
      //i have gave the size as 10
      const hash_password = await bcrypt.hash(password, 10);
      const result = await User.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        avatar: req?.file?.filename && req?.file?.filename,
        channels: req.body.channels,
        password: hash_password,
        subscribed:req.body.subscribed
      });
      res
        .status(201)
        .json({ message: "User Registration SuccessFull", result: result });
    }
  } catch (err) {
    //Error Response when occur
    res.status(500).json({ err: err.message });
  }
}

async function UserLogin(req, res) {
  try {
    //destrucring the username and password from request body
    const { username, password } = req.body;
    //finding if the username matches the email or the password if so
    const isUser = await User.findOne({
      $or: [{ username: username }, { email: username }],
    });

    //if not matches with any data it will show user not found or exists
    if (!isUser) {
      res.status(403).json({ message: "User Does Not Exist" });
    }
    //else check for the encrypted password
    else {
      //comparing if the both the hashed password and login password macthes if matches then generate the jwt token
      //else unauthorized
      const isValid = await bcrypt.compare(password, isUser.password);
      if (isValid) {
        //generate token expires in 30minutes
        //process.env.SECRET_KEY it is environment virable for secret key present in .env file
        const token = jwt.sign({ user: isUser }, process.env.SECRET_KEY, {
          expiresIn: "30d",
        });
        res.status(200).json({ message: "Login Successfull", token: token });
      } else {
        res.status(401).json({ message: "Username or Password is Incorrect" });
      }
    }
  } catch (err) {
    //Error Response when occur
    res.status(500).json({ err: err.message });
  }
}

//update will only update image name and email
async function UpdateUserInfo(req, res) {
  try {
    //finding the user by username and updating
    const result = await User.findOneAndUpdate(
      { username: req.params.username },
      {
        $set: {
          email: req.body.email,
          avatar: req?.file?.filename,
          fullname:req.body.fullname
        }
      },
      {
        new:true
      }
    );
    //responsing with 200 and the result updated data
    res.status(200).json({ result: result });
  } catch (err) {
    //Error Response when occur
    res.status(500).json({ err: err.message });
  }
}

async function DeleteUser(req, res) {
  try {
    //delete function for deleting the user data
    const result = await User.deleteMany();
    res.status(200).json({ result: result });
  } catch (err) {
    //Error Response when occur
    res.status(500).json({ err: err.message });
  }
}

//for adding/subscribing new channel to channel array
function Subscribe(req, res) {
  User.findOne({ username: req.params.username })
    .then(
      (user) => {
        user.subscribed.push(req.body.id);
        user.save();
        res.status(201).json({ user: user });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//for removing/unsucribing the channel
function UnSubscribe(req, res) {
  User.findOne({ username: req.params.username })
    .then(
      (user) => {
        //remove is an inbuilt mongoose function to delete elements from array based on certain condition
        user.subscribed.remove(req.params.ChannelId);
        user.save();
        res.status(201).json({ user: user });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//pushing to array after creating new channel
function CreateChannel(req, res) {
  User.findOne({ username: req.params.username })
    .then(
      (user) => {
        //remove is an inbuilt mongoose function to delete elements from array based on certain condition
        user.channels.push(req.body.id);
        user.save();
        res.status(201).json({ user: user });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

//deleting the channel
function DeleteChannel(req, res) {
  User.findOne({ username: req.params.username })
    .then(
      (user) => {
        //remove is an inbuilt mongoose function to delete elements from array based on certain condition
        user.channels.remove(req.params.ChannelId);
        user.save();
        res.status(201).json({ user: user });
      },
      (err) => res.status(500).json({ err: err.message })
    )
    .catch((err) => res.status(500).json({ err: err.message }));
}

module.exports = {
  GetUser,
  UserSignup,
  UserLogin,
  UpdateUserInfo,
  DeleteUser,
  Subscribe,
  UnSubscribe,
  CreateChannel,
  DeleteChannel
};

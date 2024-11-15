const jwt = require("jsonwebtoken");

//verify user middleware for user
function VerifyUser(req, res, next) {
  //getting the token from header
  const authtoken = req.headers["authorization"];
  //spliting the token from the header authorization string
  const token = authtoken && authtoken.split(" ")[1];
  //useing jwt verify method to verify the user
  // 12345-67890-09876-54321 is the secret key to verify the jwt string
  jwt.verify(token,process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.status(401).json({ message: "Unathorized Access" });
    } else {
      req.user = user;
      next();
    }
  });
}

module.exports = { VerifyUser };

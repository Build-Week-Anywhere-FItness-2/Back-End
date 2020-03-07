const jwt = require("jsonwebtoken")
const jwtKey = require('../../authkey')



module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if(token) {
    jwt.verify(token, jwtKey.Key, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ you: "thats a negative ghost rider "})
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ you: 'shall not pass!'})
  }
};

const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyLogin = (req, res, next) =>{
    let token = req.headers.authorization.split(' ')[1]
   let token_data =  jwt.verify(token, process.env.AUTH_TOKEN);
   if(!token_data){
     return res.status(401).json({message : "Unauthorized"})
   }
   req.body.user_type = token_data.type
   req.body.user_email = token_data.user_email
   console.log(token_data)
   next()
}

module.exports = verifyLogin
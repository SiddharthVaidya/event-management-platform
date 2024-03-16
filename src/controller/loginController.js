const Validator = require("../utils/Validator");
const AuthJWT = require("../utils/AuthJWT");
const User = require("../model/Users")
require('dotenv').config()

const loginController = (req, res) =>{
    let body = req.body
    let validationStatus = Validator.validateLoginRequest(body)
    if(!validationStatus.status){
        return res.status(400).json({message: `${validationStatus.message}`})
    }
    User.findOne({email : req.body.email}).then((user) =>{
        if(!user){
            return res.status(404).json({ message: "User Not Found or Invalid Email" });
        }
        if (!Validator.matchPassword(body.password,user.password)) {
          return res.status(401).json({ message: "Password Invalid" });
        }else{
            const token = AuthJWT.genereateToken({
              email: body.email,
              type: user.type,
            });
            return res
              .status(200)
              .json({ token: token, message: "User Logged in Successfully" });
        }
    })
}

module.exports = loginController
const fs = require("fs");
const Validator = require("../utils/Validator");
const AuthJWT = require("../utils/AuthJWT");
require('dotenv').config()

const loginController = (req, res) =>{
    let body = req.body
    let validationStatus = Validator.validateLoginRequest(body)
    console.log(validationStatus)
    if(!validationStatus.status){
        return res.status(400).json({message: `${validationStatus.message}`})
    }
    let data = fs.readFileSync("./src/data/users.json")
    data = JSON.parse(data)
    let userIndex = data.users.findIndex(user => user.email===body.email)
    if(userIndex === undefined){
        return res.status(404).json({message: "User Not Found or Invalid Email"})
    }
    console.log(userIndex);
    if(!Validator.matchPassword(body.password, data.users[userIndex].password)){
        return res.status(401).json({message: "Password Invalid"})
    }
    const token = AuthJWT.genereateToken({email: body.email, type: body.type});
    return res.status(200).json({token: token, message: "User Logged in Successfully"})
}

module.exports = loginController
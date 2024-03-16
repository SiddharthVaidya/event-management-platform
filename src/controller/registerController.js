const bcrypt = require("bcrypt");
const Validator = require("../utils/Validator");
const {v4 : uuidv4}  = require('uuid')
const Io = require("../utils/ReadWrite");
const Users = require("../model/Users")

const USER_PATH = "./src/data/users.json";

const registerController = (req, res) =>{
    let requestBody = req.body;
    let validation = Validator.validateRequestBody(requestBody);
    if(validation.status === false){
        return res.status(400).json({message: `${validation.message}`})
    }
    
    requestBody.password = bcrypt.hashSync(requestBody.password, 10);
    
    let user = new Users({
        email: requestBody.email,
        password: requestBody.password,
        type: requestBody.type
    })
    user.save().then((data) => {
        return res.status(201).json({ message: "User created successfully" });
    }).catch((err) => {
        return res.status(500).json({ message: err.message})
    })
}

module.exports = registerController
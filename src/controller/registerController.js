const fs = require("fs");
const bcrypt = require("bcrypt");
const Validator = require("../utils/Validator");

const registerController = (req, res) =>{
    let requestBody = req.body;
    let validation = Validator.validateRequestBody(requestBody);
    if(validation.status === false){
        return res.status(400).json({message: `${validation.message}`})
    }
    let users = fs.readFileSync("./src/data/users.json", "utf8")
    users = JSON.parse(users)
    requestBody.password = bcrypt.hashSync(requestBody.password, 10);
    requestBody.id = users.users.length +1;
    users.users.push(requestBody)
    fs.writeFileSync('./src/data/users.json', JSON.stringify(users))
    res.status(201).json({message:"User created successfully"})
}

module.exports = registerController
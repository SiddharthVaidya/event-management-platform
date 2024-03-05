const fs = require('fs');
const getEvents = (req, res) =>{
    let data = fs.readFileSync("./src/data/events.json", "utf8");
    data = JSON.parse(data)
    return res.status(200).json({data: data})
}
// const postNewEvents = (req, res) =>{
//     if(req.body.type === "USER"){
//         return res.status(403).json({message: "Unauthorized access"})
//     }
//     let validationStatus = Validator.validateNewEvent(req.body)
//     if(validationStatus.status === false){
//         return res.status(400).json({message: `${validationStatus.message}`})
//     }
//     let 

// }
module.exports = {getEvents}
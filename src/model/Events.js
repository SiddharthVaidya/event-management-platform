var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = Schema({
    event_name :{
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    participants: [{
        name:{
            type: String
        },
        email: {
            type: String
        },
        contact: {
            type: String
        }
    }
    ]
})

module.exports = mongoose.model("events", eventSchema)
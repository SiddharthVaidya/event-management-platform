const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController")
const verifyLogin = require("../middleware/verifyLogin")

 router.get("/", verifyLogin, eventController.getEvents);
// router.post("/", postNewEvent);
// router.put("/:id", updateEventController)
// router.delete("/:id", deleteEventController)

// router.post("/:id/register", eventRegistrationController)

module.exports = router;

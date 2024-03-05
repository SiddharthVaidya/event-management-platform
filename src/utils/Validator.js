 const bcrypt = require("bcrypt")
 class Validator {
   static validateRequestBody(body) {
     if (!body || !body.email || !body.password || !body.type) {
       return { status: false, message: "Missing Parameters" };
     }
     const emailRegexp =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     let validateEmail = emailRegexp.test(body.email);
     if (!validateEmail) {
       return { status: false, message: "Invalid Email" };
     }
     if (body.type != "ADMIN" && body.type != "USER") {
       return { status: false, message: "Invalid Role of user" };
     }
     return { status: true };
   }
   static validateLoginRequest(body) {
     if (!body || !body.email || !body.password) {
       return { status: false, message: "Missing Parameters" };
     }
     const emailRegexp =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     let validateEmail = emailRegexp.test(body.email);
     if (!validateEmail) {
       return { status: false, message: "Invalid Email" };
     }

     return { status: true };
   }

   static matchPassword(password, originalPassword) {
     return bcrypt.compareSync(password, originalPassword);
   }
 }
module.exports = Validator
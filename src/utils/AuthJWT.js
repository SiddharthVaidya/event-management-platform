const jwt = require('jsonwebtoken')
class AuthJWT {
  static genereateToken(body){
    return jwt.sign({body}, process.env.AUTH_TOKEN)
  }
}
module.exports = AuthJWT;
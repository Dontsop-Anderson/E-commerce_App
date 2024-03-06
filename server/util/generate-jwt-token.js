require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports.createJwtToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, expiresIn= 24*60*60)
}
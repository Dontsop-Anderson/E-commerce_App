const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.JWT_SECRET, (err, payload) => {
        if (err) { 
        res.status(401).json({verified: false, message: 'please make sure you are logged in'});
        } else {
        next();
        }
    });
}


const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const createJwtToken = require('../util/generate-jwt-token');
const jwt = require('jsonwebtoken'); 

module.exports.register = (req, res) => {
    User.create(req.body)
    .then(user => {
        // const userToken = createJwtToken(user._id)
        const userToken = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);
        res.cookie("usertoken", userToken, {
                httpOnly: true
            }) 
            res.status(201).json({ msg: "user successfully creates!", user: user });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message});
    })
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.status(204).json({ msg: 'You have been logged out' });
}


module.exports.login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
 
    if(user === null) {
        // email not found in users collection
        return res.status(400).json('Invalid credentials');
    }
 
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
 
    if(!correctPassword) {
        // password wasn't a match!
        return res.status(400).json('Invalid credentials');
    }
 
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);
    // const userToken = createJwtToken(user._id)
    

    // note that the response object allows chained calls to cookie and json
    res.cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "Login successful!" });
}


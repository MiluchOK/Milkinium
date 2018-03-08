/**
 * Created by amilyukov on 3/7/18.
 */
const jwt = require('jsonwebtoken');
const logger = require('../logger')('auth_controller');
const User = require('../models/users');

createToken = (data) => {
    const secret = process.env.JWT_SECRET;
    return (jwt.sign({
        data: data
    }, secret, { expiresIn: '1h' }));
};

exports.issueToken = (req, res, next) => {
    email = req.body.email;
    const user = User.findOne({email: email}).exec();

    user
    .then((user) => {
        if(user === null){
            logger('warn', 'User could not be found.');
            return res.status(404).json({error: `User with email ${email} could not be found.`});
        }

        logger('info', 'Issuing a new token for user ' + user);
        let token = createToken(user);
        logger('info', `A new token has been issued.`);
        res.status(200).json({token: token});
    })
    .catch((err) => {
        next(err);
    });
};

exports.refreshToken = (req, res) => {
    logger('info', 'Refreshing a token');
    const data = req.user;
    let token = createToken(data);
    res.status(200).json({token: token});
};
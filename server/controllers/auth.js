/**
 * Created by amilyukov on 3/7/18.
 */
const jwt = require('jsonwebtoken');
const logger = require('../logger')('auth_controller');

exports.issueToken = (req, res, next) => {
    logger('info', 'Issuing a new token');
    const secret = process.env.JWT_SECRET;
    let token = jwt.sign({
        data: {}
    }, secret, { expiresIn: '1h' });
    logger('info', `A new token has been issued.`);
    res.status(200).json({token: token});
};
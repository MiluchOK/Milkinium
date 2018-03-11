const logger = require('../logger')('auth_middleware');

module.exports = (req, res, next) => {
    logger('debug', 'Checking for authenticate');
    next();
};




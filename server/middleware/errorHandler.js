const logger = require('../logger')('error_handler');

module.exports = (error, req, res, next) => {
  logger('info', 'Throwing an error');
  res.status(error.status || 500).send({
    error,
  });
};
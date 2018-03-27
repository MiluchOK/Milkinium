const routes = require('express').Router();
const users = require('./users');
const cases = require('./cases');
const roots = require('./roots');
const auth = require('./auth');
const logger = require('../logger')('routes_index');

logger('debug', "In routes.");
routes.use('/', roots);
routes.use('/', auth);
routes.use('/users', users);
routes.use('/cases', cases);

module.exports = routes;
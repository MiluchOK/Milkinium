const routes = require('express').Router();
const users = require('./users');
const roots = require('./roots');
const auth = require('./auth');
const logger = require('../logger')('routes_index');

logger('debug', "In routes.");
routes.use('/', roots);
routes.use('/', auth);
routes.use('/users', users);

module.exports = routes;
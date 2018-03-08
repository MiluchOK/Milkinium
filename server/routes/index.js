const routes = require('express').Router();
const users = require('./users');
const roots = require('./roots');
const auth = require('./auth');

routes.use('/', roots);
routes.use('/', auth);
routes.use('/users', users);

module.exports = routes;
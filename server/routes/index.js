const routes = require('express').Router();
const users = require('./users');
const roots = require('./roots');

routes.use('/', roots);
routes.use('/users', users);

module.exports = routes;
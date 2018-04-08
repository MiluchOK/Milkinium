const routes = require('express').Router();
const users = require('./users');
const cases = require('./cases');
const projects = require('./projects');
const roots = require('./roots');
const auth = require('./auth');
const logger = require('../logger')('routes_index');
const casesController = require('../controllers/cases');

logger('debug', "In routes.");
routes.use('/', roots);
routes.use('/', auth);
routes.use('/users', users);
routes.use('/projects', projects);
routes.get('/:caseId', casesController.show);
routes.put('/:caseId', casesController.update);
routes.delete('/:caseId', casesController.destroy);

module.exports = routes;
const routes = require('express').Router({mergeParams: true});
const logger = require('../logger')('cases_route');
const casesController = require('../controllers/cases');


routes.get('/', casesController.index);
routes.post('/', casesController.create);
routes.get('/:caseId', casesController.show);
routes.put('/:caseId', casesController.update);
routes.delete('/:caseId', casesController.destroy);

module.exports = routes;
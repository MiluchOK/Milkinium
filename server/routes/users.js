const routes = require('express').Router();
const auth = require('../middleware/authorization');
const logger = require('../logger')('users_route');
const usersController = require('../controllers/users');


routes.use(auth);

routes.get('/', usersController.index);
routes.post('/', usersController.create);
routes.get('/:userId', usersController.show);
routes.put('/:userId', usersController.update);

module.exports = routes;
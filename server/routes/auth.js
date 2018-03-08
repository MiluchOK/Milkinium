const routes = require('express').Router();
const logger = require('../logger')('auth_route');
const authController = require('../controllers/auth');

const a = test = (req, res, next) => {
    console.log("sdfsdfdsf");
};

routes.post('/authenticate', authController.issueToken);

module.exports = routes;
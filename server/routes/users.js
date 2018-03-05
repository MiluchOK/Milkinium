const routes = require('express').Router();
const auth = require('../middleware/authorization');


routes.use(auth);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Got user!' });
});

module.exports = routes;
const routes = require('express').Router();
const auth = require('../middleware/authorization');
const User = require('../models/user');
const logger = require('../logger')('users');


routes.use(auth);

routes.get('/', (req, res, next) => {
  logger('info', 'Getting users.');
  const users = User.find({});
  users
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    })
});

routes.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  logger('info', `Getting a users with id ${id}`);
  const user = User.findById(id);
  user
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      next(err);
    })
})

routes.post('/', (req, res, next) => {
  logger('info', `Creating a user with ${req.body}`);
  let user = new User(req.body);
  user.save()
    .then((data) => {
      logger("info", `User is created ${data}`);
      res.status(200).json(data)
    })
    .catch((err) => {
      next(err);
    })
})

routes.put('/:userId', (req, res, next) => {
  logger('info', `Updating a user with id ${userId}.`);
  res.status(200).json({message: 'Updating a user'})
})

module.exports = routes;
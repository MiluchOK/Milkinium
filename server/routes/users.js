const routes = require('express').Router();
const auth = require('../middleware/authorization');
const User = require('../models/user');
const logger = require('../logger')('users');


routes.use(auth);

routes.get('/', (req, res) => {
  logger('info', 'Getting users.');
  res.status(200).json({ message: 'Returning all users' });
});

routes.get('/:userId', (req, res) => {
  logger('info', `Getting a users with id ${req.params.userId}`);
  res.status(200).json({message: 'Returning a user'})
})

routes.post('/', (req, res) => {
  logger('info', `Creating a user.`);
  let user = new User();
  user.first_name = "Alexey";
  user.last_name = "Milyukov";
  user.save()
    .then(() => {
      logger("info", "User is created");
    })
    .catch((err) => {
      logger('error', err);
    })
  res.status(201).json({message: 'User created'})
})

routes.put('/:userId', (req, res) => {
  logger('info', `Updating a user with id ${userId}.`);
  res.status(200),json({message: 'Updating a user'})
})

module.exports = routes;
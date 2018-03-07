const routes = require('express').Router();
const auth = require('../middleware/authorization');
var User = require('../models/user');


routes.use(auth);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Returning all users' });
});

routes.get('/:user_id', (req, res) => {
  res.status(200).json({message: 'Returning a user'})
})

routes.post('/', (req, res) => {
  let user = new User();
  user.first_name = "Alexey";
  user.save(() => {
    console.log("User created.")
  })
  res.status(201).json({message: 'User created'})
})

routes.put('/:user_id', (req, res) => {
  res.status(200),json({message: 'Updating a user'})
})

module.exports = routes;
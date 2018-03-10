const express = require('express');
const mongoose   = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const config = require('./server/config');
const errorHandler = require('./server/middleware/errorHandler');
const jwt = require('express-jwt');
// const authorization = require('./server/middleware/authorization');


const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(config.db_host)
.then(() => {
  console.log("Connected to the db.")
})
.catch((err) => {
  console.log("Error connecting to db: " + err);
});
mongoose.Promise = require('bluebird');

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(jwt({secret: process.env.JWT_SECRET}));
app.use('/', routes);
app.use(errorHandler);
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
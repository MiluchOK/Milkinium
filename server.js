const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const config = require('./server/config');
const errorHandler = require('./server/middleware/errorHandler');
const jwt = require('express-jwt');
const logger = require('./server/logger')('server_log');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(config.db_host)
    .then(() => {
        logger('debug', "Connected to the db.");
    })
    .catch((err) => {
        logger('error', "Error connecting to db: " + err);
        process.exit();
    });

mongoose.Promise = require('bluebird');
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(jwt({secret: process.env.JWT_SECRET}).unless({path: ['/authenticate']}));
app.use('/', routes);
app.use(errorHandler);
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
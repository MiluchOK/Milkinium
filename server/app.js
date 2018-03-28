require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('./config');
const errorHandler = require('./middleware/errorHandler');
const auth = require('./middleware/authenticate');
const logger = require('./logger')('server_log');

const app = express();

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
app.use((auth.authMid).unless({path: ['/authenticate']}));
app.use('/', routes);
app.use(errorHandler);

module.exports = app;
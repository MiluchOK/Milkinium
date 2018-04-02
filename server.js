const mongoose = require('mongoose');
const config = require('./server/config');
const logger = require('./server/logger')('server_log');

const port = process.env.PORT || 5000;

// listen strats the server on the given port.
const start = (app, port) => {
    return app.listen(port, (server) => console.log(`Listening on port ${port}`));
};

// close destroys the server.
const stop = (server) => {
    server.close();
};

const dbConnect = (config) => {
    mongoose.Promise = require('bluebird');
    return mongoose.connect(config.db_host);
};

module.exports = {
    start: start,
    stop: stop,
    dbConnect: dbConnect
};

if(process.env.NODE_ENV !== 'test'){
    const app = require('./server/app');
    start(app, port);
    dbConnect(config);
}
else{
    logger('debug', "Skipping server start.")
}
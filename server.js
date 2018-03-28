const app = require('./server/app');

const port = process.env.PORT || 5000;

// listen strats the server on the given port.
start = (port) => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
};

// close destroys the server.
close = () => {
    app.close();
};

exports = {
    start,
    close
};

if(process.env.NODE_ENV !== 'test'){
    start(port);
}
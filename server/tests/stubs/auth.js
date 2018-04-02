const sinon = require('sinon');

module.exports = {
    stubAuth: () => {
        console.log("STUBBING AUTH");
        auth = require('../../middleware/authenticate');
        const st = sinon.stub(auth, 'authMid')
            .callsFake(function(req, res, next) {
                return next();
            });
        return st;
    }
};
const sinon = require('sinon');

module.exports = {
    stubAuth: () => {
        auth = require('../../middleware/authenticate');
        sinon.stub(auth, 'authMid')
            .callsFake(function(req, res, next) {
                return next();
            });
    }
};
// const sinon = require('sinon');
//
// console.log("Running spec helper.");
//
// let app;
// let auth;
//
// beforeEach(function() {
//     auth = require('../middleware/authenticate');
//     sinon.stub(auth, 'authMid')
//         .callsFake(function(req, res, next) {
//             return next();
//         });
//
//     // after you can create app:
//     app = require('../../server');
// });
//
// afterEach(function() {
//     // restore original method
//     auth.authMid.restore();
// });
//
// module.exports = app;
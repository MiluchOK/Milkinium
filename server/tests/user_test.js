// const request = require('supertest');
// const sleep = require('sleep');
// const chai = require('chai');
// const sinon = require('sinon');
// const expect = chai.expect;
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
//
// describe('User', function () {
//     describe('create', function () {
//         it('should create a user', function (done) {
//
//             const userData = {
//                 email: "amilyukov@gmail.com",
//                 name: {
//                     first: 'Alex',
//                     last: 'Mil'
//                 },
//                 password: "tesT1234"
//             };
//
//             request(app)
//                 .post('/users')
//                 .send(userData)
//                 .end((err, res) => {
//                     expect(res.statusCode).to.equal(201);
//                     expect(res.body.email).to.equal(userData.email);
//                     done();
//                 })
//         });
//     });
// });
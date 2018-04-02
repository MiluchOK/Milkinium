// const request = require('supertest');
// const chai = require('chai');
// const jwt = require('jsonwebtoken');
// const expect = chai.expect;
// const app = require('../../server');
//
//
// describe('Authenticate', function () {
//     describe('POST #authenticate', function () {
//         it('should error out if user with the supplied email is not found', function (done) {
//
//             const user = {
//                 email: "fofofofoofofsasd@gmail.com",
//                 password: 'randomshit1234'
//             };
//
//             request(app)
//                 .post('/authenticate')
//                 .send(user)
//                 .then((res) => {
//                     expect(res.statusCode).to.equal(404);
//                     done();
//                 })
//                 .catch((err) => {
//                     done(err);
//                 });
//         });
//
//         it('should error out if a wrong password is supplied', function (done) {
//
//             const user = {
//                 email: "amilyukov@gmail.com",
//                 password: 'randomshit1234'
//             };
//
//             request(app)
//                 .post('/authenticate')
//                 .send(user)
//                 .end(function (err, res) {
//                     expect(res.statusCode).to.equal(401);
//                     done();
//                 });
//         });
//
//         it('should return a new JWT token', function (done) {
//
//             const user = {
//                 email: "amilyukov@gmail.com",
//                 password: 'tesT1234'
//             };
//
//             request(app)
//                 .post('/authenticate')
//                 .send(user)
//                 .end(function (err, res) {
//                     expect(res.statusCode).to.equal(200);
//                     const token = res.body.token;
//                     expect(token).to.not.equal(null);
//                     expect(token).to.not.equal("");
//                     expect(token).to.include('Bearer ');
//                     const secret = process.env.JWT_SECRET;
//                     const pureToken = token.replace('Bearer ', '');
//                     jwt.verify(pureToken, secret, function (err, decoded) {
//                         if (err) {
//                             done(err);
//                         }
//                         expect(decoded.data).to.have.all.keys('email', '_id', 'role', 'name');
//                         done();
//                     });
//                 });
//         });
//
//         it("should not allow to access any resources if token not supplied", function (done) {
//             request(app)
//                 .get('/users')
//                 .then((res) => {
//                     expect(res.statusCode).to.equal(401);
//                     expect(res.body.error).to.equal('No authorization token was found');
//                     done();
//                 })
//                 .catch((err) => {
//                     done(err);
//                 })
//         });
//
//         it("should not allow to access any resources if token is not valid", function (done) {
//             const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb28iOiJqcHAifQ.yNfnj3SRI-HqF5KJiQ1EsDBrlBkO8_8cm9im9B-mfXE';
//             request(app)
//                 .get('/users')
//                 .set('Authorization', token)
//                 .then((res) => {
//                     expect(res.statusCode).to.equal(401);
//                     expect(res.body.error).to.equal('invalid signature');
//                     done();
//                 })
//                 .catch((err) => {
//                     done(err);
//                 })
//         })
//     });
// });

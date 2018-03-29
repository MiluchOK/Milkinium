require('dotenv').config();
const request = require('supertest');
const uuidv4 = require('uuid/v4');
const sleep = require('sleep');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

let app;
let auth;

describe('Cases', function () {
    describe('create', function () {

        beforeEach(function(done) {
            auth = require('../middleware/authenticate');
            sinon.stub(auth, 'authMid')
                .callsFake(function(req, res, next) {
                    return next();
                });

            // after you can create app:
            app = require('../app');
            console.log("Got APP");
            done();
        });

        afterEach(function(done) {
            // restore original method
            auth.authMid.restore();
            done();
        });

        it('should create a case', function (done) {

            this.timeout(50000);
            console.log("STARTING TEST");
            const random = uuidv4();
            const caseData = {
                title: "TestCase" + random,
                internal_id: random
            };

            console.log("Sending the request");
            request(app)
            .post('/cases')
            .send(caseData)
            .end((err, res) => {
                console.log("Reached the end");
                if (err) done(err);
                console.log("FOOOOOOO");
                expect(res.statusCode).to.equal(201);
                done();
            });
        });
    });
});
require('dotenv').config();
const request = require('supertest');
const uuidv4 = require('uuid/v4');
const sleep = require('sleep');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const server = require('../../server.js');

let app;
let s;
let auth;

beforeEach(function(done) {
    auth = require('../middleware/authenticate');
    sinon.stub(auth, 'authMid')
        .callsFake(function(req, res, next) {
            return next();
        });

    // after you can create app:
    app = require('../app');
    console.log("Got APP");
    s = server.start(app, 9999);
    console.log("Got server " + Object.keys(s));
    done();
});

afterEach(function(done) {
    // restore original method
    auth.authMid.restore();
    console.log("Closing the server");
    s.close();
    console.log("Closed the server");
    done();
});

describe('Cases', function () {
    describe('create', function () {
        it('should create a case', function (done) {

            console.log("STARTING TEST");
            const random = uuidv4();
            const caseData = {
                title: "TestCase" + random,
                internal_id: random
            };

            request(app)
            .post('/cases')
            .send(caseData)
            .end((err, res) => {
                if (err) done(err);
                console.log("FOOOOOOO");
                expect(res.statusCode).to.equal(201);
                done();
            });
        });
    });
});
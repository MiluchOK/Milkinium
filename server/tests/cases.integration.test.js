require('dotenv').config();
const request = require('supertest');
const uuidv4 = require('uuid/v4');
const sleep = require('sleep');
const chai = require('chai');
const sinon = require('sinon');
const server = require('../../server');
const config = require('../config');
const expect = chai.expect;

let app;
let auth;
let dbConnection;

describe('Cases', function () {
    describe('create', function () {

        beforeEach(function(done) {
            this.timeout(5000);
            auth = require('../middleware/authenticate');
            sinon.stub(auth, 'authMid')
                .callsFake(function(req, res, next) {
                    return next();
                });

            // after you can create app:
            app = require('../app');
            console.log("Got APP");
            server.dbConnect(config)
                .then((connection) => {
                console.log("Got connection");
                    dbConnection = connection;
                    done();
                })
                .catch((err) => {
                    logger('error', 'Could not connect to db.')
                    done(err);
                });
        });

        afterEach(function(done) {
            // restore original method
            auth.authMid.restore();
            dbConnection.connection.close();
            done();
        });

        it('should create a case', function (done) {

            this.timeout(50000);
            console.log("STARTING TEST");
            const random = uuidv4();
            const caseData = {
                title: "TestCase" + random,
                internal_id: random,
                project: ""
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
                console.log("Executing done");
                console.log(`Error: ${res.body}`);

                done();
            });
        });
    });
});
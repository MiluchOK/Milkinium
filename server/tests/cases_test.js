const request = require('supertest');
const uuidv4 = require('uuid/v4');
const sleep = require('sleep');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

let app;
let auth;

beforeEach(function() {
    auth = require('../middleware/authenticate');
    sinon.stub(auth, 'authMid')
        .callsFake(function(req, res, next) {
            return next();
        });

    // after you can create app:
    app = require('../../server');
});

afterEach(function() {
    // restore original method
    auth.authMid.restore();
});

describe('Cases', function () {
    describe('create', function () {
        it('should create a case', function (done) {

            const random = uuidv4();
            const caseData = {
                title: "TestCase" + random,
                internal_id: random
            };

            request(app)
            .post('/cases')
            .send(caseData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                done();
            });
        });
    });
});
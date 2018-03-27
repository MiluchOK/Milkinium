const request = require('supertest');
const uuidv4 = require('uuid/v4');
const sleep = require('sleep');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server');

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
const request = require('supertest');
const sleep = require('sleep');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server');

describe('User', function () {
    describe('create', function () {
        it('should create a user', function () {

            const userData = {
                email: "amilyukov@gmail.com",
                name: {
                    first: 'Alex',
                    last: 'Mil'
                },
                password: "tesT1234"
            };

            request(app)
                .post('/users')
                .send(userData)
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.email).to.equal(userData.email)
                })
        });
    });
});
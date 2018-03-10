const request = require('supertest');
var chai = require('chai');
var expect = chai.expect;


describe("Routes", function() {
    describe("GET Users", function () {
        it("should not respond if no jwt provided", function (done) {
            request(app)
                .get('/users')
        });
    });
});

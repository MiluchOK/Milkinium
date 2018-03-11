const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server');



describe('User', function() {
    describe('#index()', function() {
        it('should return all users', function(done) {
            request(app)
                .get('/users')
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(401);
                    done();
                });
        });
    });
});

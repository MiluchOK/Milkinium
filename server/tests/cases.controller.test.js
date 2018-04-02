const sinon = require('sinon');
const Case = require('../models/cases');
const cases_controllers = require('../controllers/cases');


describe('Cases', function () {
    describe('create', function () {
        it('should call the User model creation', function (done) {
            sinon.mock(Case).expects('save').atLeast(1);
            const create_function = cases_controllers.create;
            // create_function
            done();
        })
    })
});
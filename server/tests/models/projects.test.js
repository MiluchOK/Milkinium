const sinon = require('sinon');
const sinonTestFactory = require('sinon-test');
const sinonTest = sinonTestFactory(sinon);
const chai = require('chai');
const Promise = require('bluebird');
const expect = chai.expect;
const Project = require('../../models/projects');

describe('Projects', function () {
    test('should not allow saving without a name', function (done) {
        const proj = new Project();

        proj.validate((err) => {
            expect(err.errors.name).to.exist;
            done()
        });
    });

    // test.only('should return list of cases when findWithCases is used', sinonTest(function (done) {
    //
    //     const repostObject = {name: 'foo'};
    //     this.stub(Project, 'findById').yields(null, repostObject);
    //     const r = Project.findWithCases('dsfsdfsdfsdf');
    //     r.then((data) => {
    //         expect(data).to.eq(repostObject);
    //         done();
    //     })
    //         .catch((err) => {
    //             done(err);
    //         });
    // }))
});
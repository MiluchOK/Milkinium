const request = require('supertest');
const uuidv4 = require('uuid/v4');
const chai = require('chai');
const expect = chai.expect;

const dbConnect = require('../../db').dbConnect;
let dbConnection;
let app;
let authStub;

describe('Cases', function () {

    beforeEach(function (done) {
        dbConnect().then((connection) => {
            console.log("Connected to db");
            dbConnection = connection;
            authStub = require('../stubs/auth').stubAuth();
            app = require('../../app');
            done();
        });
    });

    afterEach(function (done) {
        dbConnection.disconnect();
        authStub.restore();
        done();
    });

    it('should create a case', function (done) {
        const randomName = uuidv4();
        const project = '5ac1c7dc7be92c5176b2dad1';

        caseData = {
            title: randomName,
            project: project,
            internal_id: randomName
        };

        request(app)
            .post(`/projects/${project}/cases`)
            .send(caseData)
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.have.keys(['_id', 'title', '__v', 'project', 'internal_id']);
                expect(res.body.title).to.equal(randomName);
                expect(res.body.internal_id).to.equal(randomName);
                done();
            })
    });

    it('should get cases for the project', function (done) {
        const randomName = uuidv4();
        const project = '5ac1c7dc7be92c5176b2dad1';

        request(app)
            .get(`/projects/${project}/cases`)
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).to.equal(200);
                expect(res.body.length).to.not.equal(0);
                done();
            })
    })


});
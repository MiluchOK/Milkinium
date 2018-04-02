const request = require('supertest');
const uuidv4 = require('uuid/v4');
const chai = require('chai');
const expect = chai.expect;

const dbConnect = require('../db').dbConnect;
let dbConnection;
let app;
let authStub;

describe('Cases', function () {

    beforeEach(function(done){
        dbConnect().then((connection) => {
            console.log("Connected to db");
            dbConnection = connection;
            authStub = require('./stubs/auth').stubAuth();
            app = require('../app');
            done();
        });
    });

    afterEach(function(done){
        dbConnection.disconnect();
        authStub.restore();
        done();
    });

    it('should create a case', function(done){
        const randomName = uuidv4();

        caseData = {
            title: randomName,
            project_id: '5ac1c7dc7be92c5176b2dad1',
            internal_id: randomName
        };

        request(app)
            .post('/cases')
            .send(caseData)
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.have.keys(['_id', 'title', '__v', 'project_id', 'internal_id']);
                expect(res.body.title).to.equal(randomName);
                expect(res.body.internal_id).to.equal(randomName);
                done();
        })
    })


});
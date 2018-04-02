const request = require('supertest');
const uuidv4 = require('uuid/v4');
const chai = require('chai');
const expect = chai.expect;

const dbConnect = require('../db').dbConnect;
let dbConnection;
let app;
let authStub;

describe('Projects', function () {

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

    it('should create successful', function(done) {

        const randomName = uuidv4();

        projectData = {
            name: randomName
        };

        request(app)
            .post('/projects')
            .send(projectData)
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.have.keys(['_id', 'name', '__v', 'cases']);
                expect(res.body.name).to.equal(randomName);
                done();
        });
    });

    it('should get all projects', function(done) {
        request(app)
            .get('/projects')
            .end((err, res) => {
                if(err) done(err);
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.instanceof(Array);
                expect(res.body).not.to.be.empty;
                done();
            })
    });
});
const request = require('supertest');
const uuidv4 = require('uuid/v4');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const dbConnect = require('../db').dbConnect;
let dbConnection;

describe('Projects', function () {

    beforeEach(function(done){
        dbConnect().then((connection) => {
            console.log("Connected to db");
            dbConnection = connection;
            done();
        });
    });

    afterEach(function(done){
        dbConnection.disconnect();
        done();
    });

    it.only('should create successful', function(done) {

        require('./stubs/auth').stubAuth();
        const app = require('../app');
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
    })
});
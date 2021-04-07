
import faker from 'faker';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';
import { step } from 'mocha-steps';
import app from './../app.js';

const should = chai.should();
chai.use(chaiHttp);
const request = supertest(app);
let userId;
let cookie;

describe(' API Test Suite', () => {

    let userPass = faker.internet.password(10, true);
    const mockUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: userPass,
        confirmPassword: userPass,
    };

    describe('User Authentication API Test Suite', function() {
        step('Create a User', async function(done) {
            await request
                .post('/auth/signup')
                .set('content-type', 'application/json')
                .send(mockUser)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    expect(res).to.have.cookie('origin');
                    cookie = res.header['set-cookie'];
                });
                done();
        });
        step('Logs In a User', async function(done) {
            const loginObj = {
                email: mockUser.email,
                password: mockUser.password,
            };
            await request
                .post('/auth/login')
                .set('Content-Type', 'application/json')
                .send(loginObj)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    cookie = res.header['set-cookie'];
                    userId = res.text;
                });
                done();
        });
        step('Logs Out a User', async function(done) {
            await request
                .get('/auth/logout')
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
                done();
        });
    });
    
        
    describe('User API Test', function() {
        step('Success Patch User Description', async function(done) {
            const req = {
                        userId : userId,
                        description : "faker.datatype.string(16)",
                      }
            await request
                .patch(`/api/user/description`)
                .set('Cookie', cookie)
                .send(req)
                .then((res) => {
                    res.should.have.status(200);
                });
                done();
        });
        step('Blank Patch User Description', async function(done) {
            const req = {
                        userId : userId,
                        description : ""                       
                      }
            await request
                .patch(`/api/user/description`)
                .set('Cookie', cookie)
                .send(req)
                .then((res) => {
                    res.should.have.status(400);
                });
                done();
        });

        step('More than 500 chars Patch User Description', async function(done) {
            const req = {
                        userId : userId,
                        description : faker.datatype.string(544)
                       
                      }
            await request
                .patch(`/api/user/description`)
                .set('Cookie', cookie)
                .send(req)
                .then((res) => {
                    res.should.have.status(400);
                });
                done();
        });
    });

    
    describe('Skill API Testing Suite', () => {
        const skillName = faker.random.word();
        let skill;
                

        step('Post Skill', async function(done) {
            await request
                .post(`/api/skill/`)
                .set('Cookie', cookie)
                .send({ name: skillName })
                .then((res) => {
                    res.should.have.status(200);
                    skill = res.body.skill[0];
                });
                done();
        });
        step('Get Skill', async function(done) {
            await request
                .get(`/api/skill/${skillName}`)
                .set('Cookie', cookie)
                .then((res) => {
                    res.should.have.status(200);
                });
                done();
        });
        
        step('Delete Skill', async function(done){
            await request
                .delete(`/api/skill/`)
                .set('Cookie', cookie)
                .send({ skillId: skill.id })
                .then((res) => {
                    res.should.have.status(200);
                });
                done();
        });
    });
    describe("Title testing",function(){
        step('Patch User Title', async function(done) {
            const title = faker.random.word();
            await request
                .patch(`/api/user/title`)
                .set('Cookie', cookie)
                .send({ userId, title })
                .then((res) => {
                    
                    res.should.have.status(200);
                });
                done();
        });
        step('Blank Patch User Title', async function(done) {
            const title = "";
            await request
                .patch(`/api/user/title`)
                .set('Cookie', cookie)
                .send({ userId, title })
                .then((res) => {
                    res.should.have.status(400);
                });
                done();
        });
        step('More than 35 words Patch User Title', async function(done) {
            const title = faker.datatype.string(53);
            await request
                .patch(`/api/user/title`)
                .set('Cookie', cookie)
                .send({ userId, title })
                .then((res) => {
                    res.should.have.status(400);
                });
                done();
        });
    });

    
});
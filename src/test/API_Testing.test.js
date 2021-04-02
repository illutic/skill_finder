/* eslint-disable no-undef */
import faker from 'faker';
import fs from 'fs';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';
import { step } from 'mocha-steps';
import app from '../app.js';
import makeAssociations from '../data-access/associations.js';

const should = chai.should();
chai.use(chaiHttp);
const request = supertest(app);
makeAssociations();
let userId;
let cookie;

describe('Backend API Test Suite', () => {
    process.env.TEST = 'true';
    let userPass = faker.internet.password(10, true);
    const mockUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: userPass,
        confirmPassword: userPass,
    };

    describe('User Authentication Test Suite', () => {
        step('Create a User', async () => {
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
        });
        step('Logs In a User', async () => {
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
        });
        step('Logs Out a User', async () => {
            await request
                .get('/auth/logout')
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
    });

    describe('User Controller Test', () => {
        step('Get Unauthenticated User', async () => {
            await request.get(`/api/user/${userId}`).then((res) => {
                console.log(res.body);
                res.should.have.status(200);
                expect(res.body).to.have.property('id');
            });
        });
        step('Get Authenticated User', async () => {
            await request
                .get(`/api/user/`)
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    expect(res.body).to.have.property('id');
                });
        });
        step('Post Profile Photo', async () => {
            const filename = 'testPhoto.jpg';
            await request
                .post(`/api/user/photo/profilePhoto`)
                .set('Cookie', cookie)
                .set('Content-Type', `multipart/form-data`)
                .attach('image', fs.readFileSync(`test/${filename}`), filename)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Post Background Photo', async () => {
            const filename = 'testPhoto.jpg';
            await request
                .post(`/api/user/photo/backgroundImage`)
                .set('Cookie', cookie)
                .set('Content-Type', `multipart/form-data`)
                .attach('image', fs.readFileSync(`test/${filename}`), filename)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Delete Profile Photo', async () => {
            await request
                .delete(`/api/user/photo/profilePhoto`)
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Delete Background Image', async () => {
            await request
                .delete(`/api/user/photo/backgroundImage`)
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Patch User Title', async () => {
            const title = faker.name.title();
            await request
                .patch(`/api/user/title`)
                .set('Cookie', cookie)
                .send({ title })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    expect(res.body.user).to.have.property('title');
                });
        });
        step('Patch User Description', async () => {
            const description = faker.datatype.string(16);
            await request
                .patch(`/api/user/description`)
                .set('Cookie', cookie)
                .send({ description })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    expect(res.body.user).to.have.property('description');
                });
        });
        step('Patch User email', async () => {
            const email = faker.internet.email();
            await request
                .patch(`/api/user/email`)
                .set('Cookie', cookie)
                .send({ email, password: userPass })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Patch User password', async () => {
            const password = faker.internet.password();
            await request
                .patch(`/api/user/password`)
                .set('Cookie', cookie)
                .send({ password, confirmPassword: userPass })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    userPass = password;
                });
        });
        step('Delete User', async () => {
            const confirmPhrase = 'Delete account';
            await request
                .delete(`/api/user/account`)
                .set('Cookie', cookie)
                .send({ confirmPhrase, confirmPassword: userPass })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
    });
    describe('Skill Testing Suite', () => {
        const skillName = faker.random.word();
        let skill;
        step('Create a User', async () => {
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
        });
        step('Log In a User', async () => {
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
                });
        });

        step('Post Skill', async () => {
            await request
                .post(`/api/skill/`)
                .set('Cookie', cookie)
                .send({ name: skillName })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    // eslint-disable-next-line prefer-destructuring
                    skill = res.body.skill[0];
                });
        });
        step('Get Skill', async () => {
            await request
                .get(`/api/skill/${skillName}`)
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
        step('Delete Skill', async () => {
            await request
                .delete(`/api/skill/`)
                .set('Cookie', cookie)
                .send({ skillId: skill.id })
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
    });

    describe('Chat Testing Suite', () => {
        step('Get All Chats', async () => {
            await request
                .get(`/api/chats`)
                .set('Cookie', cookie)
                .then((res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                });
        });
    });
});

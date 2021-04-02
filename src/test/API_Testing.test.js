/* eslint-disable no-undef */
import faker from 'faker';
import { v4 } from 'uuid';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';
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
    const userPass = faker.internet.password(10, true);
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
                    res.should.have.status(200);
                });
        });
    });

    describe('User Controller Test', () => {
        step('Get Unauthenticated User', async () => {
            await request.get(`/api/user/${userId}`).then((res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('id');
            });
        });
        step('Get Authenticated User', async () => {
            await request
                .get(`/api/user/`)
                .set('Cookie', cookie)
                .then((res) => {
                    res.should.have.status(200);
                    expect(res.body).to.have.property('id');
                });
        });
    });
});

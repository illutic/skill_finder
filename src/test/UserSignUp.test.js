/* eslint-disable no-undef */
import faker from 'faker';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { signUp } from '../controllers/auth-controller.js';
import app from '../app.js';

const should = chai.should();

describe('User Authentication Test Suite', () => {
    process.env.DB_HOST = 'localhost:5430';
    chai.use(chaiHttp);
    let cookie;
    const userPass = faker.internet.password();
    const mockUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: userPass,
        confirmPassword: userPass,
    };
    it('Creates a User', () => {
        chai.request(app)
            .post('/auth/signup')
            .set('content-type', 'application/json')
            .send(mockUser)
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(200);
                expect(res).to.have.cookie('origin');
                cookie = res.header['set-cookie'];
                // done();
                // validateAuthForm(mockUser, FORM_TYPES.signup);
            });
    });
    it('Logs In a User', () => {
        if (cookie) {
            chai.request(app)
                .post('/auth/login')
                .set('cookie', cookie[0])
                .send({
                    email: mockUser.email,
                    password: mockUser.password,
                })
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    // done();
                    // validateAuthForm(mockUser, FORM_TYPES.signup);
                });
        } else {
            chai.request(app)
                .post('/auth/login')
                .send({
                    email: mockUser.email,
                    password: mockUser.password,
                })
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    // done();
                    // validateAuthForm(mockUser, FORM_TYPES.signup);
                });
        }
    });
});

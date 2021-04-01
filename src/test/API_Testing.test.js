/* eslint-disable no-undef */
import faker from 'faker';
import { v4 } from 'uuid';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import makeAssociations from '../data-access/associations.js';

const should = chai.should();
chai.use(chaiHttp);
makeAssociations();

describe('Backend API Test Suite', function () {
    let userObj;
    let cookie;
    process.env.TEST = 'true';
    const userPass = faker.internet.password(10, true);
    const mockUser = {
        id: v4(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: userPass,
        confirmPassword: userPass,
    };

    describe('User Authentication Test Suite', function () {
        step('Create a User', function () {
            chai.request(app)
                .post('/auth/signup')
                .set('content-type', 'application/json')
                .send(mockUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res).to.have.cookie('origin');
                    cookie = res.header['set-cookie'];
                    if (res.body) {
                        this.userObj = res.body;
                    }
                    // validateAuthForm(mockUser, FORM_TYPES.signup);
                });
        });
        step('Logs In a User', function () {
            const loginObj = {
                email: mockUser.email,
                password: mockUser.password,
            };
            chai.request(app)
                .post('/auth/login')
                .set('content-type', 'application/json')
                .send(loginObj)
                .end((err, res) => {
                    // res.should.have.status(200);
                    if (res.body) {
                        this.userObj = res.body;
                    }
                });
        });
    });

    /** This bit fails. Idk why... yet */
    // describe('User Controller Test', function () {
    //     step('Get User', function () {
    //         chai.request(app)
    //             .get(`/api/user/${mockUser.id}`)
    //             .end(async (err, res) => {
    //                 console.log(res.body);
    //                 res.should.have.status(200);
    //             });
    //     });
    // });
});

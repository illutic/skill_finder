/* eslint-disable no-undef */
import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { signUp } from '../controllers/auth-controller.js';
import app from '../app.js';

chai.use(chaiHttp);
const should = chai.should();
process.env.DB_HOST = 'localhost:5430';

describe('User Sign Up Test', () => {
    const userPass = faker.internet.password();
    const mockUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: userPass,
        confirmPassword: userPass,
    };
    it('should create a User', () => {
        chai.request(app)
            .post('/api/auth/signup')
            .type('form')
            .send(mockUser)
            .end((err, res) => {
                res.should.have.status(200);
                done();
                // validateAuthForm(mockUser, FORM_TYPES.signup);
            });
    });
});

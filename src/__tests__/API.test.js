/* eslint-disable no-undef */
import faker from 'faker';
import FORM_TYPES from '../constants/form-types';
import validateAuthForm from '../utils/validateAuthForm';

const mockUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
};

describe('User Sign Up Test', () => {
    it('should test true', () => {
        validateAuthForm(mockUser, FORM_TYPES.signup);
        expect(true).toBe(true);
    });
});

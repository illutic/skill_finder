import * as form from '../utils/validateAuthForm.js';
import FORM_TYPES from '../constants/form-types.js';

let didValidate;
describe('User does not exist', () => {
    const mockUser = { email: 'jasonOwen@gmail.com', password: 'Le7m£Enter' };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signin);
        didValidate = true;
    } catch (error) {}
});

describe('User exists but password is incorrect', () => {
    const mockUser = { email: 'Up903124@myport.ac.uk', password: 'P4r1s!' };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signin);
        didValidate = true;
    } catch (error) {}
});

describe('Empty input', () => {
    const mockUser = { email: ' ', password: ' ' };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signin);
        didValidate = true;
    } catch (error) {}
});

describe('Correct input', () => {
    const mockUser = { email: 'up75857myport.ac.uk', password: 'Sm311yJ£11y' };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signin);
        didValidate = true;
    } catch (error) {}
});

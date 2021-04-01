import * as form from '../utils/validateAuthForm.js';
import FORM_TYPES from '../constants/form-types.js';

let didValidate;
describe('Should be invalid if user inputs null data', () => {
    const mockUser = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('password under 6 chars on signup', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'b.smith@myport.ac.uk',
        password: '1234',
        confirmPassword: '1234',
    };
    didValidate = true;
    try {
        form.validateAuthzForm(mockUser, FORM_TYPES.signup);
    } catch (error) {
        didValidate = false;
    }
});

describe('invalid email', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: 'bsmithgmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Password is over 6 chars ', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Password doesnt match ', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234877',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Missing first name', () => {
    const mockUser = {
        firstName: '',
        lastName: 'Smith',
        email: 'b.smith@myport.ac.uk',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Missing last name', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: '',
        email: 'b.smith@myport.ac.uk',
        password: '1234',
        confirmPassword: '1234',
    };
    didValidate = true;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
    } catch (error) {
        didValidate = false;
    }
});

describe('missing email', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: '',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Missing password', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Missing confirmation password', () => {
    const mockUser = {
        firstName: 'bob',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Cannot enter numerical values in name field ', () => {
    const mockUser = {
        firstName: '1244',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Cannot enter numerical values in name field ', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: '324',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Special characters in text field', () => {
    const mockUser = {
        firstName: '###@@%',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});
describe(' Symbols in last name field', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: '£££$$%%^',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Cannot have empty spaces as first name ', () => {
    const mockUser = {
        firstName: '   ',
        lastName: 'smith',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Cannot have empty spaces as last name ', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: '    ',
        email: 'bsmith@gmail.com',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

describe('Cannot have empty spaces as email ', () => {
    const mockUser = {
        firstName: 'Bob',
        lastName: 'Smith',
        email: '   ',
        password: '1234567',
        confirmPassword: '1234567',
    };
    didValidate = false;
    try {
        form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    } catch (error) {}
});

import FORM_TYPES from '../constants/form-types.js';

const validateAuthForm = (formData, formType) => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const emailRegExp = new RegExp(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );
    if (!email || !emailRegExp.test(email)) {
        throw Error('Please enter a valid email address.');
    }
    if (!password) {
        throw Error('Please enter your password');
    }
    if (formType === FORM_TYPES.signup) {
        if (!firstName) {
            throw Error('Please enter your first name.');
        }
        if (!lastName) {
            throw Error('Please enter your last name.');
        }
        if (password.length < 10) {
            throw Error('Your password must be at least 10 characters long.');
        }
        if (!confirmPassword) {
            throw Error('Please confirm your password.');
        }
        if (password !== confirmPassword) {
            throw Error('Passwords do not match.');
        }
    }
};

export default validateAuthForm;

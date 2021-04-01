const validateAuthForm = require('../utils/validateAuthForm.js');
const FORM_TYPES = require ('../constants/form-types.js');

test('User does not exist', () => {

    const mockUser = { email: "jasonOwengmail.com", password: "Le7m£Enter"}; 
        didValidate = false; 
        try{
            validateAuthForm(mockUser, FORM_TYPES.login);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('User exists but password is incorrect', () => {

    const mockUser = {email: "Up903124@myport.ac.uk", password: "ioip"}; 
        didValidate = false; 
        try{
            validateAuthForm(mockUser, FORM_TYPES.login);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });


test('Empty input', () => {

    const mockUser = {  email: "", password: ""}; 
        didValidate = false; 
        try{
            validateAuthForm(mockUser, FORM_TYPES.login);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('Correct input', () => {

    const mockUser = {email: "up75857@myport.ac.uk", password: "osjuhuhuhuh"}; 
        didValidate = false; 
        try{
            validateAuthForm(mockUser, FORM_TYPES.login);
            didValidate = true;
        }catch (error) {
        console.log(error)
        }
        expect (didValidate).toBe (true);
    });

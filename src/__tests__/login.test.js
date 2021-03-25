const form = require('../utils/validateAuthForm.js');
const FORM_TYPES = require('../constants/form-types.js');

test('User does not exist', () => {

    const mockUser = { email: "jasonOwen@gmail.com", password: "Le7m£Enter"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signin);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('User exists but password is incorrect', () => {

    const mockUser = {  email: "Up903124@myport.ac.uk", password: "P4r1s!"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signin);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });


test('Empty input', () => {

    const mockUser = {  email: " ", password: " "}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signin);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('Correct input', () => {

    const mockUser = {  email: "up75857myport.ac.uk", password: "Sm311yJ£11y"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signin);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (true);
    });
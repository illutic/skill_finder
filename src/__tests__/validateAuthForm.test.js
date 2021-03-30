const form = require('../utils/validateAuthForm.js');
const FORM_TYPES = require('../constants/form-types.js');

test('Should be invalid if user inputs null data', () => {

    const mockUser = {  firstName: "", lastName: "", email: "", password: "", confirmPassword: ""}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('password under 6 chars on signup', () => {
    const mockUser = {  firstName: "Bob", lastName: "Smith", email: "b.smith@myport.ac.uk", password: "1234", confirmPassword: "1234"}; 
        didValidate=true; 
        try{
            test = form.validateAuthzForm(mockUser, FORM_TYPES.signup);
        }catch (error) {
            didValidate=false; 
        }
        expect (didValidate).toBe (false);
});



test('invalid email', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "bsmithgmail.com", password: "1234567", confirmPassword: "1234567"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('Password is over 6 chars ', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (true);
});

test('Password doesnt match ', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234877"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
        
    }
    expect (didValidate).toBe (false);
});

test('Missing first name', () => {

    const mockUser = {  firstName: "", lastName: "Smith", email: "b.smith@myport.ac.uk", password: "1234567", confirmPassword: "1234567"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('Missing last name', () => {
    const mockUser = {  firstName: "Bob", lastName: "", email: "b.smith@myport.ac.uk", password: "1234", confirmPassword: "1234"}; 
        didValidate=true; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        }catch (error) {
            didValidate=false; 
        }
        expect (didValidate).toBe (false);
});


test('missing email', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "", password: "1234567", confirmPassword: "1234567"}; 
        didValidate = false; 
        try{
            test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
            didValidate = true;
        }catch (error) {

        }
        expect (didValidate).toBe (false);
    });

test('Missing password', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "bsmith@gmail.com", password: "", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {

    }
    expect (didValidate).toBe (false);
});

test('Missing confirmation password', () => {

    const mockUser = {  firstName: "bob", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: ""}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
    }
    expect (didValidate).toBe (false);
});

test('Cannot enter numerical values in name field ', () => { 

    const mockUser = {  firstName: "1244", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});

test('Cannot enter numerical values in name field ', () => { 

    const mockUser = {  firstName: "Bob", lastName: "324", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});

test('Special characters in text field', () => {

    const mockUser = {  firstName: "###@@%", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
    }
    expect (didValidate).toBe (false);
});
test(' Symbols in last name field', () => { 

    const mockUser = {  firstName: "Bob", lastName: "£££$$%%^", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});

test('Cannot have empty spaces as first name ', () => { 

    const mockUser = {  firstName: "   ", lastName: "smith", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});

test('Cannot have empty spaces as last name ', () => { 

    const mockUser = {  firstName: "Bob", lastName: "    ", email: "bsmith@gmail.com", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});

test('Cannot have empty spaces as email ', () => { 

    const mockUser = {  firstName: "Bob", lastName: "Smith", email: "   ", password: "1234567", confirmPassword: "1234567"}; 
    didValidate = false; 
    try{
        test = form.validateAuthForm(mockUser, FORM_TYPES.signup);
        didValidate = true;
    }catch (error) {
  
    }
    expect (didValidate).toBe (false);
});
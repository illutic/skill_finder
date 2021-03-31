##Getting started 

We started off my creating a new folder called _ _tests__. This was followed by creating a new file within the __tests__ folder called validateAuthForm.test.js, this naming convention allows for proper functionality to be executed, in this case, test.

mkdir ___tests_ __

### Installation 
To install all of the required dependencies, we ran the command 'npm install' this generated a node_modules folder in our local repository.



### Configuration 
We configured our package.Json file, this allowed us to run test from command line. 
We added the following to our package.json file "test": "jest --verbose".

The completed package.json file looked like this.

    "scripts": {
        "start": "node ./app.js",
        "postinstall": "npm install --prefix client --force",
        "server": "nodemon app.js",
        "client": "npm start --prefix client",
        "dev": "concurrently \"npm run server\" \"npm run client\"",
        "lint": "eslint .",
        "build": "npm run build --prefix client",
        "test": "jest --verbose"
    }
}

### Matchers
The matcher in the code below  is toBe(true), this checks whether the values passed by the mock user are those that are expected to be valid for authentication. Matchers check for for equality.


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

### Expect(true)
We used the expect function when we were testing a value, in this case we were able to combine expect with the Boolean we declared in the second line of our code (didValidate), this was followed by the matcher which checked the value.
Below is an example of a test we produced to test input from a user that doesn't exist.

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


## Testing empty input

A mock user was created to enter null data.

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


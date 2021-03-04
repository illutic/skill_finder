import React from 'react';
import Form from '../../components/Form/index';
import FORMS from '../../constants/forms';
import extractFormData from '../../utils/extractFormData';

const Signup = () => {
    const signupHandler = (e) => {
        e.preventDefault();
        const formData = extractFormData(e.target);
        console.log(formData);
    };

    return <Form type={FORMS.signup} submitHandler={signupHandler}></Form>;
};

export default Signup;

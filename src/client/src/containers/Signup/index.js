import React from 'react';
import Form from '../../components/Form/index';
import FORMS from '../../constants/forms';
import withOriginSignup from '../../hoc/withOriginSignup';

const Signup = ({ action }) => {
    return <Form type={FORMS.signup} action={action}></Form>;
};

export default withOriginSignup(Signup);

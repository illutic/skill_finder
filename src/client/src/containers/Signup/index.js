import React from 'react';
import Form from '../../components/Form/index';
import FORMS from '../../constants/forms';
import withSignupHandler from '../../hoc/withSignupHandler';

const Signup = ({ handler }) => {
    return <Form type={FORMS.signup} handler={handler}></Form>;
};

export default withSignupHandler(Signup);

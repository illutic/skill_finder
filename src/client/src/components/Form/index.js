import React from 'react';
import * as Styled from './styles';
import Button from '../Button/index';
import FORMS from '../../constants/forms';

const Form = ({ type, action, ...rest }) => {
    return (
        <Styled.Form {...rest} onSubmit={action}>
            {type === FORMS.signup ? (
                <>
                    <Styled.Label for="first">First Name</Styled.Label>
                    <Styled.Input type="text" name="first" placeholder="Aa" />
                    <Styled.Label for="last">Last Name</Styled.Label>
                    <Styled.Input type="text" name="last" placeholder="Aa" />
                </>
            ) : null}
            <Styled.Label for="email">E-mail</Styled.Label>
            <Styled.Input type="text" name="email" placeholder="@" />
            <Styled.Label for="password">Password</Styled.Label>
            <Styled.Input type="password" name="password" placeholder="*" />
            {type === FORMS.signup ? (
                <>
                    <Styled.Label for="confirm-password">
                        Confirm Password
                    </Styled.Label>
                    <Styled.Input
                        type="password"
                        name="confirm-password"
                        placeholder="*"
                    />
                </>
            ) : null}
            <Button type="submit">
                {type === FORMS.signup ? 'Sign up' : 'Log in'}
            </Button>
        </Styled.Form>
    );
};

export default Form;

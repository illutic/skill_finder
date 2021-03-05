import React from 'react';
import * as Styled from './styles';
import Button from '../Button/index';
import FORMS from '../../constants/forms';

const Form = ({ type, submitHandler, ...rest }) => {
    return (
        <Styled.Form {...rest} onSubmit={(e) => submitHandler(e)}>
            {type === FORMS.signup ? (
                <>
                    <Styled.Label htmlFor="first">First Name</Styled.Label>
                    <Styled.Input type="text" name="first" placeholder="Aa" />
                    <Styled.Label htmlFor="last">Last Name</Styled.Label>
                    <Styled.Input type="text" name="last" placeholder="Aa" />
                </>
            ) : null}
            <Styled.Label htmlFor="email">E-mail</Styled.Label>
            <Styled.Input type="text" name="email" placeholder="@" />
            <Styled.Label htmlFor="password">Password</Styled.Label>
            <Styled.Input type="password" name="password" placeholder="*" />
            {type === FORMS.signup ? (
                <>
                    <Styled.Label htmlFor="confirmPassword">
                        Confirm Password
                    </Styled.Label>
                    <Styled.Input
                        type="password"
                        name="confirmPassword"
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

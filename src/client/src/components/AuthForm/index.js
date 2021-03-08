import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styles';
import Button from '../Button/index';
import FORMS from '../../constants/forms';
import ENDPOINTS from '../../constants/endpoints';
import extractFormData from '../../utils/extractFormData';

const AuthForm = ({ history, type, ...rest }) => {
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = extractFormData(e.target);
        const endpoint =
            type === FORMS.signup ? ENDPOINTS.signup : ENDPOINTS.login;
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const err = await response.json();
                throw err;
            }
            history.push('/');
        } catch (err) {
            setError(err.error);
        }
    };

    return (
        <Styled.Form {...rest} onSubmit={(e) => submitHandler(e)}>
            {type === FORMS.signup ? (
                <>
                    <Styled.Label htmlFor="firstName">First Name</Styled.Label>
                    <Styled.Input
                        type="text"
                        name="firstName"
                        placeholder="Aa"
                    />
                    <Styled.Label htmlFor="lastName">Last Name</Styled.Label>
                    <Styled.Input
                        type="text"
                        name="lastName"
                        placeholder="Aa"
                    />
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
            <Styled.Error>{error}</Styled.Error>
        </Styled.Form>
    );
};

export default withRouter(AuthForm);

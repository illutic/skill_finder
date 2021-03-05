import * as Styled from './styles';
import Button from '../Button/index';
import FORMS from '../../constants/forms';
import ENDPOINTS from '../../constants/endpoints';
import extractFormData from '../../utils/extractFormData';

const AuthForm = ({ type, ...rest }) => {
    const signupHandler = async (e) => {
        e.preventDefault();
        const formData = extractFormData(e.target);
        try {
            const response = await fetch(`${ENDPOINTS.auth}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const loginHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <Styled.Form
            {...rest}
            onSubmit={(e) =>
                type === FORMS.signup ? signupHandler(e) : loginHandler(e)
            }
        >
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
        </Styled.Form>
    );
};

export default AuthForm;

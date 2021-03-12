import * as Styled from './styled';
import Button from '../Button/index';
import GoogleButton from '../../components/GoogleButton/index';
import FORM_TYPES from '../../constants/formTypes';
import withOriginAuth from '../../hoc/withOriginAuth';

const AuthForm = ({ type, error, ...rest }) => {
    return (
        <Styled.Form {...rest}>
            {type === FORM_TYPES.signup ? (
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
            {type === FORM_TYPES.signup ? (
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
                {type === FORM_TYPES.signup ? 'Sign up' : 'Log in'}
            </Button>
            <GoogleButton>Continue with Google</GoogleButton>
            <Styled.Error>{error}</Styled.Error>
        </Styled.Form>
    );
};

export default withOriginAuth(AuthForm);

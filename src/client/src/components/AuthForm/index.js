import * as Styled from './styles';
import Button from '../Button/index';
import FORMS from '../../constants/forms';
import withAuth from '../../hoc/withAuth';

const AuthForm = ({ type, error, ...rest }) => {
    return (
        <Styled.Form {...rest}>
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

export default withAuth(AuthForm);

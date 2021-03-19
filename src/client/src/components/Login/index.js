import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import AuthForm from '../AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Login = () => {
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading extra underlined>
                    Log in
                </Heading>
                <AuthForm type={FORM_TYPES.login} />
            </Styled.Wrapper>
        </Container>
    );
};

export default Login;

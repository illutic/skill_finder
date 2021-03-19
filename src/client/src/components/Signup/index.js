import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import AuthForm from '../AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Signup = () => {
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading extra underlined>
                    Sign up
                </Heading>
                <AuthForm type={FORM_TYPES.signup} />
            </Styled.Wrapper>
        </Container>
    );
};

export default Signup;

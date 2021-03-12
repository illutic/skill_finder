import Container from '../Container/index';
import Heading from '../Heading/index';
import AuthForm from '../AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Signup = () => {
    return (
        <Container>
            <Heading>Sign up</Heading>
            <AuthForm type={FORM_TYPES.signup} />
        </Container>
    );
};

export default Signup;

import Container from '../Container/index';
import Heading from '../Heading/index';
import AuthForm from '../AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Login = () => {
    return (
        <Container>
            <Heading>Log in</Heading>
            <AuthForm type={FORM_TYPES.login} />
        </Container>
    );
};

export default Login;

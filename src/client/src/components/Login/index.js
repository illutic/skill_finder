import AuthForm from '../../components/AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Login = () => {
    return <AuthForm type={FORM_TYPES.login} />;
};

export default Login;

import AuthForm from '../../components/AuthForm/index';
import FORMS from '../../constants/forms';

const Login = () => {
    return <AuthForm type={FORMS.login} />;
};

export default Login;

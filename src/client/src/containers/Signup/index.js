import AuthForm from '../../components/AuthForm/index';
import FORM_TYPES from '../../constants/formTypes';

const Signup = () => {
    return <AuthForm type={FORM_TYPES.signup} />;
};

export default Signup;

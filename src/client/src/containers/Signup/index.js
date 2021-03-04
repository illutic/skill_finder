import AuthForm from '../../components/AuthForm/index';
import FORMS from '../../constants/forms';

const Signup = () => {
    return <AuthForm type={FORMS.signup} />;
};

export default Signup;

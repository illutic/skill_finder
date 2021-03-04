import Form from '../../components/Form/index';
import FORMS from '../../constants/forms';
import ENDPOINTS from '../../constants/endpoints';
import extractFormData from '../../utils/extractFormData';

const Signup = () => {
    const signupHandler = async (e) => {
        e.preventDefault();
        const formData = extractFormData(e.target);
        try {
            await fetch(`${ENDPOINTS.api}/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        } catch (err) {
            // Handle Response Errors
            console.log(err);
        }
    };

    return <Form type={FORMS.signup} submitHandler={signupHandler}></Form>;
};

export default Signup;

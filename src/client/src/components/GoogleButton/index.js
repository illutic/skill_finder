import GoogleLogin from 'react-google-login';
import useGoogleSuccess from '../../hooks/auth/useGoogleSuccess';
import Button from '../Button/index';

const GoogleButton = ({ children }) => {
    const onSuccess = useGoogleSuccess();

    return (
        <GoogleLogin
            clientId="376637890849-b65grja0cmn3me29vvj7k4565k3jjoi7.apps.googleusercontent.com"
            onSuccess={onSuccess}
            render={({ onClick, disabled }) => (
                <Button onClick={onClick} disabled={disabled} outlined>
                    {children}
                </Button>
            )}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleButton;

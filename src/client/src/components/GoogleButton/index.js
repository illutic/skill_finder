import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Button from '../Button/index';

const GoogleButton = ({ history, children }) => {
    const setGoogleCookie = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
        history.push('/');
    };

    return (
        <GoogleLogin
            clientId="376637890849-b65grja0cmn3me29vvj7k4565k3jjoi7.apps.googleusercontent.com"
            onSuccess={setGoogleCookie}
            render={({ onClick }) => (
                <Button onClick={onClick}>{children}</Button>
            )}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default withRouter(GoogleButton);

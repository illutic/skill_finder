import GoogleLogin from 'react-google-login';

const GoogleButton = ({ children }) => {
    const setGoogleCookie = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
    };

    return (
        <GoogleLogin
            clientId="376637890849-b65grja0cmn3me29vvj7k4565k3jjoi7.apps.googleusercontent.com"
            buttonText={children}
            onSuccess={setGoogleCookie}
        />
    );
};

export default GoogleButton;

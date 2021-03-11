import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';
import compose from '../utils/compose';

const withGoogleAuth = (Component) => {
    return ({ history, ...rest }) => {
        const { setIsAuth } = useContext(AuthContext);

        const setGoogleCookie = (response) => {
            const tokenId = response.tokenObj.id_token;
            const maxAge = response.tokenObj.expires_at;
            const expires = response.tokenObj.expires_in;
            document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
            setIsAuth(true);
            history.push('/');
        };

        return <Component onSuccess={setGoogleCookie} {...rest} />;
    };
};

export default compose(withRouter, withGoogleAuth);

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';

const useGoogleSuccess = () => {
    const history = useHistory();
    const { setIsAuth } = useContext(AuthContext);

    const onSuccess = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
        setIsAuth(true);
        history.push('/');
    };

    return onSuccess;
};

export default useGoogleSuccess;

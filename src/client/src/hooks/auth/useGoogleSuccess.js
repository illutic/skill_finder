import { useHistory } from 'react-router-dom';
import useAuthCheck from '../auth/useAuthCheck';
import useGlobalDataSync from '../sync/useGlobalDataSync';

const useGoogleSuccess = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncGlobalData = useGlobalDataSync();

    const onSuccess = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
        checkAuth();
        syncGlobalData();
        history.push('/');
    };
    return onSuccess;
};

export default useGoogleSuccess;

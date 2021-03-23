import { useHistory } from 'react-router-dom';
import useAuthCheck from '../hooks/useAuthCheck';
import useUserSync from '../hooks/useUserSync';

const useGoogleSuccess = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncUser = useUserSync();

    const onSuccess = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
        checkAuth();
        syncUser();
        history.push('/');
        window.location.reload();
    };
    return onSuccess;
};

export default useGoogleSuccess;

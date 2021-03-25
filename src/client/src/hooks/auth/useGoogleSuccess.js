import { useHistory } from 'react-router-dom';
import useAuthCheck from '../auth/useAuthCheck';
import useUserSync from '../sync/useUserSync';
import useChatsSync from '../sync/useChatsSync';

const useGoogleSuccess = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncUser = useUserSync();
    const syncChats = useChatsSync();

    const onSuccess = (response) => {
        const tokenId = response.tokenObj.id_token;
        const maxAge = response.tokenObj.expires_at;
        const expires = response.tokenObj.expires_in;
        document.cookie = `google=${tokenId};max-age=${maxAge};expires=${expires}`;
        checkAuth();
        syncUser();
        syncChats();
        history.push('/');
    };
    return onSuccess;
};

export default useGoogleSuccess;

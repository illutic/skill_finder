import { useHistory } from 'react-router-dom';
import ENDPOINTS from '../constants/endpoints';
import useAuthCheck from '../hooks/useAuthCheck';
import useUserSync from '../hooks/useUserSync';

const useLogout = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncUser = useUserSync();

    const logOut = async () => {
        await fetch(ENDPOINTS.logout);
        checkAuth();
        syncUser();
        history.push('/login');
    };

    return logOut;
};

export default useLogout;

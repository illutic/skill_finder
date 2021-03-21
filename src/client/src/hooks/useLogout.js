import { useHistory } from 'react-router-dom';
import ENDPOINTS from '../constants/endpoints';
import useAuthCheck from '../hooks/useAuthCheck';

const useLogout = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();

    const logOut = async () => {
        await fetch(ENDPOINTS.logout);
        checkAuth();
        history.push('/login');
    };

    return logOut;
};

export default useLogout;

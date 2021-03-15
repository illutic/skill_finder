import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';
import ENDPOINTS from '../constants/endpoints';

const useLogout = () => {
    const history = useHistory();
    const { setIsAuth } = useContext(AuthContext);

    const logOut = () => {
        fetch(ENDPOINTS.logout);
        setIsAuth(false);
        history.push('/');
    };

    return logOut;
};

export default useLogout;

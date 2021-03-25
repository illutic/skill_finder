import { useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import ENDPOINTS from '../../constants/endpoints';

const useAuthCheck = () => {
    const { setIsAuth } = useContext(AuthContext);

    const checkAuth = useCallback(async () => {
        const response = await fetch(ENDPOINTS.check);
        if (response.ok) {
            setIsAuth(true);
            return;
        }
        setIsAuth(false);
    }, [setIsAuth]);

    return checkAuth;
};

export default useAuthCheck;

import { useContext, useEffect, useCallback } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import ENDPOINTS from '../constants/endpoints';

const useAuthCheck = () => {
    const { setIsAuth } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const checkAuth = useCallback(async () => {
        const response = await fetch(ENDPOINTS.check);
        const data = await response.json();
        if (response.ok) {
            setUser(data);
            setIsAuth(true);
            return;
        }
        setUser(null);
        setIsAuth(false);
        console.error(data.error);
    }, [setIsAuth, setUser]);

    useEffect(() => {
        checkAuth();
    }, [setIsAuth, checkAuth]);

    return checkAuth;
};

export default useAuthCheck;

import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import ENDPOINTS from '../constants/endpoints';

const useAuthCheck = () => {
    const { setIsAuth } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch(ENDPOINTS.check);
            if (response.ok) {
                const user = await response.json();
                setUser(user);
                setIsAuth(true);
            }
        };
        checkAuth();
    }, [setIsAuth]);
};

export default useAuthCheck;

import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import ENDPOINTS from '../constants/endpoints';

const useAuthCheck = () => {
    const { setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch(ENDPOINTS.check);
            if (response.ok) {
                setIsAuth(true);
            }
        };
        checkAuth();
    }, [setIsAuth]);
};

export default useAuthCheck;

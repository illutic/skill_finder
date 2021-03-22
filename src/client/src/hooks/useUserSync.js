import { useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import ENDPOINTS from '../constants/endpoints';

const useUserSync = () => {
    const { setUser } = useContext(UserContext);

    const syncUser = useCallback(async () => {
        const response = await fetch(ENDPOINTS.user);
        const data = await response.json();
        if (response.ok) {
            setUser(data);
            return;
        }
        setUser(null);
    }, [setUser]);

    useEffect(() => {
        syncUser();
    }, [syncUser]);

    return syncUser;
};

export default useUserSync;

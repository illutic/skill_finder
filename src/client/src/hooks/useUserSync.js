import { useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import { SocketContext } from '../contexts/SocketContextProvider';
import { initialize } from '../helpers/socket';
import ENDPOINTS from '../constants/endpoints';

const useUserSync = () => {
    const { setUser } = useContext(UserContext);
    const { socket } = useContext(SocketContext);
    const syncUser = useCallback(async () => {
        const response = await fetch(ENDPOINTS.user);
        const data = await response.json();
        if (response.ok) {
            setUser(data);
            initialize(socket);

            return;
        }
        setUser(null);
    }, [setUser, socket]);

    useEffect(() => {
        syncUser();
    }, [syncUser]);

    return syncUser;
};

export default useUserSync;

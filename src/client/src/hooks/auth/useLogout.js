import io from 'socket.io-client';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthCheck from '../auth/useAuthCheck';
import useGlobalDataSync from '../sync/useGlobalDataSync';
import { SocketContext } from '../../contexts/SocketContextProvider';
import ENDPOINTS from '../../constants/endpoints';

const useLogout = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncGlobalData = useGlobalDataSync();
    const { socket, setSocket } = useContext(SocketContext);

    const logOut = async () => {
        await fetch(ENDPOINTS.logout);
        checkAuth();
        syncGlobalData();
        if (socket) {
            socket.disconnect();
            setSocket(
                io({
                    autoConnect: false,
                    reconnection: false,
                    forceNew: true,
                })
            );
        }
        history.push('/login');
    };

    return logOut;
};

export default useLogout;

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import ENDPOINTS from '../constants/endpoints';
import { SocketContext } from '../contexts/SocketContextProvider';
import useAuthCheck from '../hooks/useAuthCheck';
import useUserSync from '../hooks/useUserSync';

const useLogout = () => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncUser = useUserSync();
    const { socket, setSocket } = useContext(SocketContext);
    const logOut = async () => {
        await fetch(ENDPOINTS.logout);
        checkAuth();
        syncUser();
        if (socket) {
            socket.disconnect();
            setSocket(null);
        }
        history.push('/login');
    };

    return logOut;
};

export default useLogout;

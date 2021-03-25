import io from 'socket.io-client';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthCheck from '../auth/useAuthCheck';
import useUserSync from '../sync/useUserSync';
import { SocketContext } from '../../contexts/SocketContextProvider';
import ENDPOINTS from '../../constants/endpoints';

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
            setSocket(io({ autoConnect: false }));
        }
        history.push('/login');
    };

    return logOut;
};

export default useLogout;

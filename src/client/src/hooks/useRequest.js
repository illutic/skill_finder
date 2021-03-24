import { useEffect, useContext, useState, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const [user, setUser] = useState(null);
    const emitRequest = useCallback(
        (userId) => {
            socket.emit('requestNotification', userId);
        },
        [socket]
    );

    useEffect(() => {
        emitRequest(user);
    }, [emitRequest, user]);
    return { setUser };
};

export default useRequest;

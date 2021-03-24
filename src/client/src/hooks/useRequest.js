import { useEffect, useContext, useState, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const [userId, setUserId] = useState('');
    const emitRequest = useCallback(
        (userId) => {
            socket.emit('requestNotification', userId);
        },
        [socket]
    );

    useEffect(() => {
        emitRequest(userId);
    }, [emitRequest, userId]);
    return { setUserId };
};

export default useRequest;

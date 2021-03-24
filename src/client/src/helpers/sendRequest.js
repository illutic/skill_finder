import { useEffect, useContext, useState, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';
import ENDPOINTS from '../constants/endpoints.js';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const [userId, setUserId] = useState('');

    const postRequest = useCallback((userId) => {
        fetch(ENDPOINTS.request + '/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toId: userId,
            }),
        });
    }, []);

    const emitRequest = useCallback((userId) => {
        console.log('You have requested ', userId);
        socket.emit('requestNotification', userId);
    }, []);

    useEffect(() => {
        console.log(userId);
        //postRequest(userId);
        emitRequest(userId);
    }, [userId]);
    return { setUserId };
};

export default sendRequest;

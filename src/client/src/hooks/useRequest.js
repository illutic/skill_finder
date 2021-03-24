import { useEffect, useContext, useCallback } from 'react';
import useRequestsSync from './useRequestsSync';
import useChatsSync from './useChatsSync';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const { syncRequests } = useRequestsSync();
    const { syncChats } = useChatsSync();

    const sendRequest = useCallback(
        (toId) => {
            socket.emit('request', toId);
            socket.emit('requestNotification', toId);
            syncRequests();
        },
        [socket, syncRequests]
    );

    const acceptRequest = useCallback(
        (requestId) => {
            socket.emit('acceptRequest', requestId);
            syncRequests();
        },
        [socket, syncRequests]
    );
    const denyRequest = useCallback(
        (requestId) => {
            socket.emit('denyRequest', requestId);
            syncRequests();
        },
        [socket, syncRequests]
    );

    useEffect(() => {
        socket.on('acceptedRequest', (acceptedRequest) => {
            syncChats();
        });
    }, [socket, syncRequests, syncChats]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

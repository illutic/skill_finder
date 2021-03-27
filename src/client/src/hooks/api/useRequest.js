import { useEffect, useContext, useCallback } from 'react';
import useRequestsSync from '../sync/useRequestsSync';
import useNotificationsSync from '../sync/useNotificationsSync';
import useChatsSync from '../sync/useChatsSync';
import { SocketContext } from '../../contexts/SocketContextProvider';

const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const syncRequests = useRequestsSync();
    const syncNotifications = useNotificationsSync();
    const syncChats = useChatsSync();

    const sendRequest = useCallback(
        (toId) => {
            socket.emit('newRequest', toId);
        },
        [socket]
    );

    const acceptRequest = useCallback(
        (requestId) => {
            socket.emit('acceptRequest', requestId);
        },
        [socket]
    );
    const denyRequest = useCallback(
        (requestId) => {
            socket.emit('denyRequest', requestId);
        },
        [socket]
    );

    useEffect(() => {
        socket.on('incomingRequest', () => {
            syncRequests();
            syncNotifications();
        });
        socket.on('acceptedRequest', () => {
            syncRequests();
            syncNotifications();
            syncChats();
        });
        socket.on('deniedRequest', () => {
            syncRequests();
            syncNotifications();
        });
    }, [socket, syncRequests, syncNotifications, syncChats]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

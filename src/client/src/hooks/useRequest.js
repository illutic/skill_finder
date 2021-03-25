import { useEffect, useContext, useCallback } from 'react';
import useNotificationsSync from './useNotificationsSync';
import useChatsSync from './useChatsSync';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const { syncNotifications } = useNotificationsSync();
    const { syncChats } = useChatsSync();

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
        socket.on('acceptedRequest', () => {
            syncNotifications();
            syncChats();
        });
        socket.on('incomingRequest', (notification) => {
            syncNotifications();
        });
    }, [socket, syncChats, syncNotifications]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

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
            // Emit X that will make the server
            // create a new notification for toId.
            syncNotifications();
        },
        [socket, syncNotifications]
    );

    const acceptRequest = useCallback(
        (requestId) => {
            socket.emit('acceptRequest', requestId);
            // Emit X that will make the server
            // create a new notification for fromId

            syncNotifications();
        },
        [socket, syncNotifications]
    );
    const denyRequest = useCallback(
        (requestId) => {
            socket.emit('denyRequest', requestId);
            // We are not informing users about denied requests
            // nor do we delete them. Only delete a notification
            // about the request for toId.
            syncNotifications();
        },
        [socket, syncNotifications]
    );

    useEffect(() => {
        socket.on('acceptedRequest', () => {
            syncChats();
        });
        socket.on('incomingRequest', (notification) => {
            syncNotifications();
        });
    }, [socket, syncChats, syncNotifications]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

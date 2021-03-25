import { useEffect, useContext, useCallback } from 'react';
import useNotificationsSync from '../sync/useNotificationsSync';
import useChatsSync from '../sync/useChatsSync';
import { SocketContext } from '../../contexts/SocketContextProvider';
import ENDPOINTS from '../../constants/endpoints';

const useRequest = () => {
    const { socket } = useContext(SocketContext);
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
    const denyRequest = useCallback(async (requestId) => {
        await fetch(ENDPOINTS.denyRequest, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestId,
            }),
        });
    }, []);

    useEffect(() => {
        socket.on('incomingRequest', () => {
            syncNotifications();
        });
        socket.on('acceptedRequest', () => {
            syncNotifications();
            syncChats();
        });
    }, [socket, syncChats, syncNotifications]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

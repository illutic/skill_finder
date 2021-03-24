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

            // Delete requestNotification
            // and emit X that will make the server
            // create a new notification for toId.
            socket.emit('requestNotification', toId);

            syncRequests();
            // ^ We will sync notifications here eventually.
        },
        [socket, syncRequests]
    );

    const acceptRequest = useCallback(
        (requestId) => {
            socket.emit('acceptRequest', requestId);
            // Emit X that will make the server
            // create a new notification for fromId

            syncRequests();
            // ^ We will sync notifications here eventually.
        },
        [socket, syncRequests]
    );
    const denyRequest = useCallback(
        (requestId) => {
            socket.emit('denyRequest', requestId);
            // We are not informing users about denied requests
            // nor do we delete them. Only delete a notification
            // about the request for toId.

            syncRequests();
            // ^ We will sync notifications here eventually.
        },
        [socket, syncRequests]
    );

    useEffect(() => {
        socket.on('acceptedRequest', (acceptedRequest) => {
            // This socket should create a chatroom for
            // toId and fromId. Then we synchronise chats for both users here.
            // I think it's all done already - commenting for clarity.
            syncChats();
        });
    }, [socket, syncChats]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

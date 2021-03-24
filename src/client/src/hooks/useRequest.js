import { useEffect, useContext, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';
import { RequestsContext } from '../contexts/RequestsContextProvider';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const { setRequests } = useContext(RequestsContext);

    const sendRequest = useCallback(
        (toId) => {
            console.log(toId);
            socket.emit('request', toId);
            socket.emit('requestNotification', toId);
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
        socket.on('request', (request) => {
            setRequests((previousRequests) => [...previousRequests, request]);
        });
        socket.on('acceptedRequest', (acceptedRequest) => {
            setRequests((previousRequests) => [
                ...previousRequests,
                acceptedRequest,
            ]);
        });
        socket.on('denyRequest', (deniedRequest) => {
            setRequests((previousRequests) =>
                previousRequests.filter(
                    (request) => request.id !== deniedRequest.id
                )
            );
        });
    }, [socket, setRequests]);

    return { sendRequest, acceptRequest, denyRequest };
};

export default useRequest;

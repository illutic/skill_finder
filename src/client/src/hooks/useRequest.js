import { useEffect, useContext, useState, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';
import ENDPOINTS from '../constants/endpoints';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const [teacher, setTeacher] = useState(null);
    const [removeId, setRemoveId] = useState(null);
    const [requests, setRequests] = useState([]);

    const loadRequests = useCallback(async () => {
        const requests = await fetch(`${ENDPOINTS.request}`);
        const data = await requests.json();
        setRequests(data);
    }, []);

    const emitRequest = useCallback(
        (userId) => {
            socket.emit('requestNotification', userId);
        },
        [socket]
    );
    const emitRemoveRequest = useCallback(
        (requestId) => {
            socket.emit('denyRequest', requestId);
        },
        [socket]
    );

    useEffect(() => {
        loadRequests();
    }, [loadRequests]);

    useEffect(() => {
        console.log(requests);
        socket.on('request', (request) => {
            setRequests((previousRequests) => [...previousRequests, request]);
        });
        socket.on('denyRequest', (deniedRequest) => {
            setRequests((previousRequests) =>
                previousRequests.filter(
                    (request) => request.id !== deniedRequest.id
                )
            );
        });
        socket.on('acceptRequest', (acceptedRequest) => {
            setRequests((previousRequests) =>
                previousRequests.filter(
                    (request) => request.id !== acceptedRequest.id
                )
            );
        });
    }, [socket]);

    useEffect(() => {
        emitRequest(teacher);
    }, [emitRequest, teacher]);

    useEffect(() => {
        emitRemoveRequest(removeId);
    }, [emitRemoveRequest, removeId]);

    return { setTeacher, setRemoveId, socket, requests };
};

export default useRequest;

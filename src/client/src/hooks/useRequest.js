import { useEffect, useContext, useState, useCallback } from 'react';
import { SocketContext } from '../contexts/SocketContextProvider';
import ENDPOINTS from '../constants/endpoints';

export const useRequest = () => {
    const { socket } = useContext(SocketContext);
    const [teacher, setTeacher] = useState(null);
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

    useEffect(() => {
        loadRequests();
    }, [loadRequests]);

    useEffect(() => {
        socket.on('request', (request) => {
            setRequests([...requests, request]);
        });
    }, [requests, socket]);

    useEffect(() => {
        emitRequest(teacher);
    }, [emitRequest, teacher]);
    return { setTeacher, socket, requests };
};

export default useRequest;

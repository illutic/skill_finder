import { useEffect, useState, useCallback, useContext } from 'react';
import ENDPOINTS from '../constants/endpoints';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useNotificationSocket = () => {
    const { socket } = useContext(SocketContext);
    const [notifications, setNotifications] = useState([]);

    const loadNotifications = useCallback(async () => {
        const requests = await fetch(`${ENDPOINTS.request}`);
        const data = await requests.json();
        setNotifications(data);
    }, []);

    useEffect(() => {
        loadNotifications();
    }, []);

    useEffect(() => {
        socket.on('notification', (notification) => {
            setNotifications([...notifications, notification]);
        });
    }, []);

    return { socket, notifications };
};

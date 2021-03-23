import { useEffect, useState, useRef, useCallback, useContext } from 'react';
import ENDPOINTS from '../constants/endpoints';
import { initialize, leaveChat, joinChat } from '../helpers/socket.js';
import useLocationId from './useLocationId';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useNotificationSocket = () => {
    /*const {socket} = useContext(SocketContext);
    const [notifications, setNotifications] = useState([]);
    // get notification Id

    const loadNotifications = useCallback(async () => {
        try {
            const response = await fetch(`${ENDPOINTS.api}/${chatId}/messages`);
            const data = await response.json();
            setNotifications(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const leaveCurrentChat = useCallback((chatId) => {
        leaveChat(socket, prevChatId);
        setMessages([]);
        prevChatId = chatId;
    }, []);

    const scrollDown = () => {
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    useEffect(() => {
        leaveCurrentChat(chatId);
        initialize(socket);
        joinChat(socket, chatId);
        loadMessages();
    }, [chatId]);

    useEffect(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages([...messages, message]);
            });
            scrollDown();
        }
    }, [messages, socket]);

    return { socket, messages, messagesContainerRef, chatId };*/
};

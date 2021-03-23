import { useEffect, useState, useRef, useCallback, useContext } from 'react';
import ENDPOINTS from '../constants/endpoints';
import { initialize, leaveChat, joinChat } from '../helpers/socket.js';
import useLocationId from './useLocationId';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useChatSocket = () => {
    const [socket] = useContext(SocketContext);
    const [messages, setMessages] = useState([]);
    const { locationId: chatId } = useLocationId();
    let prevChatId = chatId;
    const messagesContainerRef = useRef();

    const loadMessages = useCallback(async () => {
        if (chatId) {
            try {
                const response = await fetch(
                    `${ENDPOINTS.api}/${chatId}/messages`
                );
                const data = await response.json();
                setMessages(data);
            } catch (err) {
                console.log(err);
            }
        }
    }, [chatId]);

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

    return { socket, messages, messagesContainerRef, chatId };
};

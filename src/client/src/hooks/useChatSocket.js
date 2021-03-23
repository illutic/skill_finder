import { useEffect, useState, useCallback, useContext } from 'react';
import ENDPOINTS from '../constants/endpoints';
import { initialize, leaveChat, joinChat } from '../helpers/socket.js';
import { SocketContext } from '../contexts/SocketContextProvider';

export const useChatSocket = (chatId) => {
    const [socket] = useContext(SocketContext);
    const [messages, setMessages] = useState([]);
    let prevChatId = chatId;

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

    useEffect(() => {
        leaveCurrentChat(chatId);
        initialize(socket);
        joinChat(socket, chatId);
        loadMessages();
    }, [chatId]);

    return { socket, messages, chatId };
};

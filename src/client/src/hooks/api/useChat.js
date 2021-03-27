import { useState, useContext, useCallback, useEffect } from 'react';
import { SocketContext } from '../../contexts/SocketContextProvider';
import ENDPOINTS from '../../constants/endpoints';

const useChat = (chatId) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState();
    const { socket } = useContext(SocketContext);

    const joinCurrentChat = useCallback(() => {
        if (chatId) {
            socket.emit('joinChat', chatId);
        }
    }, [socket, chatId]);

    const leaveCurrentChat = useCallback(() => {
        if (chatId) {
            socket.emit('leaveChat', chatId);
        }
        setMessages([]);
    }, [socket, chatId]);

    const loadMessages = useCallback(async () => {
        if (chatId) {
            const response = await fetch(`${ENDPOINTS.api}/${chatId}/messages`);
            const data = await response.json();
            setMessages(data);
        }
    }, [chatId]);

    const sendMessage = (e) => {
        const isKeydown = e.type === 'keydown' && e.keyCode === 13;
        const isClick = e.type === 'click';
        if (isKeydown || isClick) {
            e.preventDefault();
            if (newMessage) {
                socket.emit('sendMessage', chatId, newMessage);
                setNewMessage(null);
            }
        }
    };

    const listenForNewMessages = useCallback(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages((previousMessages) => [
                    ...previousMessages,
                    message,
                ]);
            });
        }
    }, [socket]);

    useEffect(() => {
        joinCurrentChat();
        loadMessages();
        return () => {
            leaveCurrentChat();
        };
    }, [joinCurrentChat, loadMessages, leaveCurrentChat]);

    useEffect(() => {
        listenForNewMessages();
    }, [listenForNewMessages]);

    return { messages, setNewMessage, sendMessage };
};

export default useChat;

import { useState, useContext, useCallback, useEffect } from 'react';
import useFilesSync from '../sync/useFilesSync';
import { SocketContext } from '../../contexts/SocketContextProvider';
import ENDPOINTS from '../../constants/endpoints';
import { codeMarkdown, htmlEncoder } from '../../helpers/htmlEncoder';
import checkMessageFile from '../../helpers/checkMessageFile';
import MESSAGE_TYPES from '../../constants/messageTypes';

const useChat = (chatId) => {
    const syncFiles = useFilesSync();
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

    const loadFiles = useCallback(() => {
        syncFiles(chatId);
    }, [chatId, syncFiles]);

    const sendMessage = useCallback(
        (e) => {
            const isKeydown = e.type === 'keydown' && e.keyCode === 13;
            const isClick = e.type === 'click';
            if (isKeydown || isClick) {
                e.preventDefault();
                if (newMessage) {
                    let encodedMessage = htmlEncoder(newMessage);
                    encodedMessage = codeMarkdown(newMessage);
                    socket.emit(
                        'sendMessage',
                        chatId,
                        encodedMessage,
                        MESSAGE_TYPES.text
                    );
                    setNewMessage(null);
                }
            }
        },
        [socket, chatId, newMessage]
    );

    const sendFile = useCallback(
        (file, uri) => {
            const messageType = checkMessageFile(file);
            socket.emit('sendMessage', chatId, uri, messageType);
            syncFiles(chatId);
        },
        [socket, chatId, syncFiles]
    );

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
        loadFiles();
        return () => {
            leaveCurrentChat();
        };
    }, [joinCurrentChat, loadMessages, loadFiles, leaveCurrentChat]);

    useEffect(() => {
        listenForNewMessages();
    }, [listenForNewMessages]);

    return { messages, setNewMessage, sendMessage, sendFile };
};

export default useChat;

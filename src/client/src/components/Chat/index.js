import { useEffect, useState, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import { initialize, disconnect } from '../../helpers/socket.js';
import useLocationId from '../../hooks/useLocationId';
import * as Styled from './styled';
import ENDPOINTS from '../../constants/endpoints';

const Chat = ({ toggleContactsDrawer, toggleFilesDrawer }) => {
    const [socket, setSocket] = useState(io({ autoConnect: false }));
    const [messages, setMessages] = useState();
    const { locationId: chatId } = useLocationId();
    const messagesContainerRef = useRef();
    const currentUserId = null;

    const sendMessage = (e) => {
        e.preventDefault();
        const form = e.target;
        const newMessage = form.newMessage.value;
        if (newMessage) {
            socket.emit('sendMessage', chatId, newMessage);
            form.reset();
        }
    };

    const scrollDown = () => {
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const establishConnection = useCallback(() => {
        const newSocket = initialize(chatId);
        setSocket(newSocket);
    }, [chatId]);

    const breakConnection = useCallback(() => {
        disconnect(socket);
        setMessages([]);
    }, [socket]);

    const loadMessages = useCallback(async () => {
        try {
            const response = await fetch(`${ENDPOINTS.api}/${chatId}/messages`);
            const data = await response.json();
            setMessages(data);
        } catch (err) {
            console.log(err);
        }
    }, [chatId]);

    // I refactored the code and prepared it to be exported
    // but I didn't bother to test it. If it fails,
    // just revert this (latest) commit (git reset --hard HEAD^ + git push --force).
    useEffect(() => {
        breakConnection();
        establishConnection();
        loadMessages();
    }, [chatId]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
        scrollDown();
    }, [messages, socket]);

    return (
        <Styled.Chat>
            <Styled.Controls>
                <Styled.Control onClick={toggleContactsDrawer}>
                    Contacts
                </Styled.Control>
                <Styled.Control onClick={toggleFilesDrawer}>
                    Files
                </Styled.Control>
            </Styled.Controls>
            <Styled.Messages ref={messagesContainerRef}>
                {messages?.length
                    ? messages.map((message) => {
                          message.userId === currentUserId ? (
                              <Styled.Message key={message.id} currentUser>
                                  {message.content}
                              </Styled.Message>
                          ) : (
                              <Styled.Message key={message.id}>
                                  {message.content}
                              </Styled.Message>
                          );
                      })
                    : null}
            </Styled.Messages>
            <Styled.Form onSubmit={sendMessage}>
                <Styled.TextArea
                    type="text"
                    placeholder="Aa"
                    name="newMessage"
                    id="newMessage"
                />
                <Styled.PositionedSendButton />
            </Styled.Form>
        </Styled.Chat>
    );
};

export default Chat;

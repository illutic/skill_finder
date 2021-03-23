import { useContext, useEffect, useCallback, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import { SocketContext } from '../../contexts/SocketContextProvider';
import { initialize, leaveChat, joinChat } from '../../helpers/socket';
import ENDPOINTS from '../../constants/endpoints';
import * as Styled from './styled';
import useLocationId from '../../hooks/useLocationId';

const Chat = ({ toggleContactsDrawer, toggleFilesDrawer }) => {
    const [messages, setMessages] = useState([]);
    const { locationId: chatId } = useLocationId();
    const { user } = useContext(UserContext);
    const { socket } = useContext(SocketContext);
    const messagesContainerRef = useRef();

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

    const loadMessages = useCallback(async () => {
        if (chatId) {
            const response = await fetch(`${ENDPOINTS.api}/${chatId}/messages`);
            const data = await response.json();
            setMessages(data);
        }
    }, [chatId]);

    const leaveCurrentChat = useCallback(
        (chatId) => {
            leaveChat(socket, chatId);
            setMessages([]);
        },
        [socket]
    );

    // Try to understand how this code works,
    // it's useful when working with current/upcoming data.
    useEffect(() => {
        // 2. Then this function runs with a new chatId
        // i.e. chatId=212
        initialize(socket);
        joinChat(socket, chatId);
        loadMessages();
        // 3. It also declares the function below with the new chatId=212,
        // that will be run on chatId change. That's the entire lifecycle in fact.
        return () => {
            // 1. When chatId changes, this function runs first,
            // using the current chatId i.e. chatId=105
            leaveCurrentChat(chatId);
        };
    }, [chatId, socket, loadMessages, leaveCurrentChat]);

    useEffect(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages([...messages, message]);
            });
        }
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
                          if (message.userId === user.id) {
                              return (
                                  <Styled.Message key={message.id} currentUser>
                                      {message.content}
                                  </Styled.Message>
                              );
                          } else {
                              return (
                                  <Styled.Message key={message.id}>
                                      {message.content}
                                  </Styled.Message>
                              );
                          }
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

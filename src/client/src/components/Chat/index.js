import { useContext, useEffect, useCallback, useRef, useState } from 'react';
import useLocationId from '../../hooks/other/useLocationId';
import { UserContext } from '../../contexts/UserContextProvider';
import { SocketContext } from '../../contexts/SocketContextProvider';
import { leaveChat, joinChat } from '../../helpers/socket';
import * as Styled from './styled';
import ENDPOINTS from '../../constants/endpoints';

const Chat = ({ toggleContactsDrawer, toggleFilesDrawer }) => {
    // useChat hook
    const { locationId: chatId } = useLocationId();
    const { socket } = useContext(SocketContext);
    const [messages, setMessages] = useState([]); // Export

    // Local
    const { user: currentUser } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState();
    const messagesFormRef = useRef();
    const messagesContainerRef = useRef();

    // useChat hook
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

    // Local
    useEffect(() => {
        // resetForm callback
        messagesFormRef.current.reset();

        // scrollDown callback
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, [messages]);

    // useMessages hook -> useChat hook
    const loadMessages = useCallback(async () => {
        if (chatId) {
            const response = await fetch(`${ENDPOINTS.api}/${chatId}/messages`);
            const data = await response.json();
            setMessages(data);
        }
    }, [chatId]);

    // useChat hook
    const leaveCurrentChat = useCallback(
        (chatId) => {
            leaveChat(socket, chatId);
            setMessages([]);
        },
        [socket]
    );

    // useChat hook
    useEffect(() => {
        joinChat(socket, chatId);
        loadMessages();
        return () => {
            leaveCurrentChat(chatId);
        };
    }, [chatId, socket, loadMessages, leaveCurrentChat]);

    // useChat hook
    useEffect(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages((previousMessages) => [
                    ...previousMessages,
                    message,
                ]);
            });
        }
    }, [socket]);

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
                          if (message.userId === currentUser.id) {
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
            <Styled.Form ref={messagesFormRef}>
                <Styled.TextArea
                    type="text"
                    placeholder="Aa"
                    name="newMessage"
                    id="newMessage"
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={sendMessage}
                />
                <Styled.PositionedSendButton onClick={sendMessage} />
            </Styled.Form>
        </Styled.Chat>
    );
};

export default Chat;

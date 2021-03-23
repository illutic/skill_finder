import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';
import useLocationId from '../../hooks/useLocationId';
import { useChatSocket } from '../../hooks/useChatSocket.js';

const Chat = ({ toggleContactsDrawer, toggleFilesDrawer }) => {
    const { user } = useContext(UserContext);
    const { locationId: chatId } = useLocationId();
    const { socket, messages, setMessages } = useChatSocket(chatId);
    const messagesContainerRef = useRef();
    const scrollDown = () => {
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const form = e.target;
        const newMessage = form.newMessage.value;
        if (newMessage) {
            socket.emit('sendMessage', chatId, newMessage);
            form.reset();
        }
    };

    useEffect(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages([...messages, message]);
            });
            scrollDown();
        }
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

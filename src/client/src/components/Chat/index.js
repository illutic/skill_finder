import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';
import { useChatSocket } from '../../hooks/useChatSocket';

const Chat = ({ toggleContactsDrawer, toggleFilesDrawer }) => {
    const { user } = useContext(UserContext);
    const { socket, messages, messagesContainerRef, chatId } = useChatSocket();
    const sendMessage = (e) => {
        e.preventDefault();
        const form = e.target;
        const newMessage = form.newMessage.value;
        if (newMessage) {
            socket.emit('sendMessage', chatId, newMessage);
            form.reset();
        }
    };

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

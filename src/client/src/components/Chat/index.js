import { useContext, useEffect, useRef, useCallback } from 'react';
import useLocationId from '../../hooks/other/useLocationId';
import useChat from '../../hooks/api/useChat';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';

const Chat = () => {
    const { user } = useContext(UserContext);
    const { locationId } = useLocationId();
    const { messages, setNewMessage, sendMessage } = useChat(locationId);
    const messagesFormRef = useRef();
    const messagesContainerRef = useRef();

    const clearMessageBox = useCallback(() => {
        messagesFormRef.current.reset();
    }, []);

    const scrollMessageBox = useCallback(() => {
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, []);

    useEffect(() => {
        clearMessageBox();
        scrollMessageBox();
    }, [messages, clearMessageBox, scrollMessageBox]);

    return (
        <Styled.Chat>
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
            <Styled.MessageBox ref={messagesFormRef}>
                <Styled.TextArea
                    type="text"
                    placeholder="Aa"
                    name="newMessage"
                    id="newMessage"
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={sendMessage}
                />
                <Styled.PositionedSendButton onClick={sendMessage} />
            </Styled.MessageBox>
        </Styled.Chat>
    );
};

export default Chat;

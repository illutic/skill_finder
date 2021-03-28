import { useContext, useEffect, useRef, useCallback } from 'react';
import useLocationId from '../../hooks/other/useLocationId';
import useChat from '../../hooks/api/useChat';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';
import useFileUpload from '../../hooks/api/useFileUpload';
import useFiles from '../../hooks/api/useFiles';
const Chat = () => {
    const { user } = useContext(UserContext);
    const { locationId } = useLocationId();
    const { uploadFile, setFilePayload } = useFileUpload();
    const { messages, setNewMessage, sendMessage } = useChat(locationId);
    const { setFilesFor } = useFiles();
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
                                  <Styled.Message
                                      key={message.id}
                                      currentUser
                                      dangerouslySetInnerHTML={{
                                          __html: message.content,
                                      }}
                                  ></Styled.Message>
                              );
                          } else {
                              return (
                                  <Styled.Message
                                      key={message.id}
                                      dangerouslySetInnerHTML={{
                                          __html: message.content,
                                      }}
                                  ></Styled.Message>
                              );
                          }
                      })
                    : null}
            </Styled.Messages>
            <Styled.FileForm>
                <Styled.Label htmlFor="newFile" />
                <span id="fileName"> Add a File </span>
                <Styled.File
                    id="newFile"
                    type="file"
                    hidden={true}
                    onChange={(e) => {
                        const fileLabel = document.getElementById('fileName');
                        fileLabel.textContent = e.target.files[0].name;
                        setFilePayload(e.target.files[0]);
                    }}
                />
            </Styled.FileForm>
            <Styled.MessageBox ref={messagesFormRef} onSubmit={sendMessage}>
                <Styled.TextArea
                    type="text"
                    placeholder="Aa"
                    name="newMessage"
                    id="newMessage"
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={sendMessage}
                />
                <Styled.PositionedSendButton
                    onClick={(e) => {
                        sendMessage(e);
                        uploadFile();
                        setFilesFor();
                    }}
                />
            </Styled.MessageBox>
        </Styled.Chat>
    );
};

export default Chat;

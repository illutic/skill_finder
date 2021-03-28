import { useContext, useEffect, useRef, useCallback } from 'react';
import useLocationId from '../../hooks/other/useLocationId';
import useChat from '../../hooks/api/useChat';
import useFileUpload from '../../hooks/api/useFileUpload';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';
import CloseButton from '../CloseButton/index';
import AttachButton from '../AttachButton/index';
import SendButton from '../SendButton/index';

const Chat = () => {
    const { user } = useContext(UserContext);
    const { locationId } = useLocationId();
    const { uploadFile, setFilePayload } = useFileUpload();
    const { messages, setNewMessage, sendMessage } = useChat(locationId);
    const messagesFormRef = useRef();
    const messagesContainerRef = useRef();
    const fileInputRef = useRef();
    const fileNameRef = useRef();
    const fileLabelRef = useRef();
    const messageBoxRef = useRef();

    const clearMessageBox = useCallback(() => {
        messagesFormRef.current.reset();
    }, []);

    const scrollMessageBox = useCallback(() => {
        const messagesContainer = messagesContainerRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, []);

    const addFilePayload = useCallback(
        (e) => {
            if (!e.target.files[0]) {
                return;
            }
            fileNameRef.current.textContent = e.target.files[0].name;
            fileLabelRef.current.classList.add('active');
            messageBoxRef.current.value = '';
            messageBoxRef.current.setAttribute('disabled', '');
            setFilePayload(e.target.files[0]);
            setNewMessage('');
        },
        [setFilePayload, setNewMessage]
    );

    const clearFilePayload = useCallback(() => {
        fileLabelRef.current.classList.remove('active');
        messageBoxRef.current.removeAttribute('disabled');
        setFilePayload(null);
    }, [setFilePayload]);

    const openFileInput = useCallback((e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }, []);

    const sendAll = useCallback(
        (e) => {
            e.preventDefault();
            uploadFile();
            sendMessage(e);
            clearFilePayload();
        },
        [sendMessage, uploadFile, clearFilePayload]
    );

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
            <Styled.MessageBox ref={messagesFormRef}>
                <Styled.TextArea
                    type="text"
                    placeholder="Aa"
                    name="newMessage"
                    id="newMessage"
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={sendMessage}
                    ref={messageBoxRef}
                ></Styled.TextArea>
                <Styled.FileUpload>
                    <Styled.FileLabel htmlFor="newFile" ref={fileLabelRef}>
                        <Styled.FileName ref={fileNameRef}></Styled.FileName>
                        <CloseButton
                            onClick={(e) => {
                                e.preventDefault();
                                clearFilePayload();
                            }}
                        />
                    </Styled.FileLabel>
                    <Styled.FileInput
                        id="newFile"
                        type="file"
                        hidden
                        onChange={addFilePayload}
                        ref={fileInputRef}
                    />
                </Styled.FileUpload>
                <Styled.Buttons>
                    <AttachButton onClick={openFileInput}>
                        Add file
                    </AttachButton>
                    <SendButton onClick={(e) => sendAll(e)} />
                </Styled.Buttons>
            </Styled.MessageBox>
        </Styled.Chat>
    );
};

export default Chat;

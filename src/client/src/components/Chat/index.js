import { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styled';
import io from 'socket.io-client';
import { initialize, disconnect } from '../../constants/socket.js';
import ENDPOINTS from '../../constants/endpoints';

const Chat = ({ location, toggleContactsDrawer, toggleFilesDrawer }) => {
    const messagesRef = useRef();
    let currentUserId;
    const [msgs, setMessages] = useState([]);
    const [socket, setSocket] = useState(io({ autoConnect: false }));

    // !Only runs whenever the path name changes!
    useEffect(() => {
        // somehow get currentUserId
        const currentChatId = location.pathname.split('/').pop();
        // disconnects existing socket & clears the messages
        disconnect(socket);
        setMessages([]);
        // connects a new socket & gets messages
        const newSocket = initialize(currentChatId);
        // caching them would be a good idea
        const getMessages = async () => {
            // Where UUID is the chatId
            try {
                const response = await fetch(
                    `${ENDPOINTS.api}/${currentChatId}/messages` // <--- THIS WILL THROW AN ERROR! Integers are not a valid uuid.
                ); // If You want to test it create a new chat, and copy and paste the uuid.
                const data = await response.json();
                setMessages(data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
        setSocket(newSocket);
    }, [location.pathname]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...msgs, message]);
        });
        const messages = messagesRef.current;
        messages.scrollTop = messages.scrollHeight;
    }, [msgs, socket]);

    const sendMessage = () => {
        socket.emit(
            'sendMessage',
            location.pathname.split('/').pop(),
            document.getElementById('textInput').value
        );
        document.getElementById('textInput').value = '';
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
            <Styled.Messages ref={messagesRef}>
                {msgs.map((msg) => {
                    if (msg.userId === currentUserId) {
                        // Checks if the person who sent the message is the current user or not.
                        return (
                            <Styled.Message key={msg.id} currentUser>
                                {msg.content}
                            </Styled.Message>
                        );
                    } else {
                        return (
                            <Styled.Message key={msg.id}>
                                {msg.content}
                            </Styled.Message>
                        );
                    }
                })}
            </Styled.Messages>
            <Styled.Form>
                <Styled.TextArea type="text" placeholder="Aa" id="textInput" />
                <Styled.PositionedSendButton
                    onClick={(e) => {
                        sendMessage();
                        e.preventDefault();
                    }}
                />
            </Styled.Form>
        </Styled.Chat>
    );
};

export default withRouter(Chat);

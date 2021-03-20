import { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styled';

const Chat = ({ location, toggleContactsDrawer, toggleFilesDrawer }) => {
    const messagesRef = useRef();

    useEffect(() => {
        const currentChatId = location.pathname.split('/').pop();
    }, [location.pathname]);

    useEffect(() => {
        const messages = messagesRef.current;
        messages.scrollTop = messages.scrollHeight;
    }, []);

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
                {/* Template */}
                {/* <Styled.Message key={messageId} currentUser>
                        {messageContent}
                    </Styled.Message> */}
                <Styled.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae leo ut erat faucibus feugiat. Nam dui ligula,
                    ultrices quis pulvinar at, commodo ac sem.
                </Styled.Message>
                <Styled.Message currentUser>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Styled.Message>
                <Styled.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Styled.Message>
                <Styled.Message currentUser>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Styled.Message>
                <Styled.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Styled.Message>
                <Styled.Message currentUser>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae leo ut erat faucibus feugiat. Nam dui ligula,
                    ultrices quis pulvinar at, commodo ac sem.
                </Styled.Message>
                <Styled.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae leo ut erat faucibus feugiat. Nam dui ligula,
                    ultrices quis pulvinar at, commodo ac sem.
                </Styled.Message>
            </Styled.Messages>
            <Styled.Form>
                <Styled.TextArea type="text" placeholder="Aa" />
                <Styled.PositionedSendButton
                    onClick={(e) => e.preventDefault()}
                />
            </Styled.Form>
        </Styled.Chat>
    );
};

export default withRouter(Chat);

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styled';

const Chat = ({ location, contactsAction, filesAction }) => {
    useEffect(() => {
        const currentChatId = location.pathname.split('/').pop();
    }, [location.pathname]);

    return (
        <Styled.Chat>
            <Styled.Controls>
                <Styled.Control onClick={contactsAction}>
                    Contacts
                </Styled.Control>
                <Styled.Control onClick={filesAction}>Files</Styled.Control>
            </Styled.Controls>
            <Styled.Messages>
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

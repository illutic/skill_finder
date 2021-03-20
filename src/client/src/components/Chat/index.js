import * as Styled from './styled';
import { connect, socket } from '../../constants/socket.js';

const Chat = ({ contactsAction, filesAction }) => {
    connect();
    const connectedSocket = socket.connect();
    /** Connect to socket
     * Join Chatroom
     * Emit messages
     *
     * Message received on server
     * Message saved in database
     */
    const sendMessage = (e) => {
        e.preventDefault();
    };

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
                <Styled.PositionedSendButton onClick={sendMessage} />
            </Styled.Form>
        </Styled.Chat>
    );
};

export default Chat;

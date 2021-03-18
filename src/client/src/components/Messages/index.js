import Container from '../Container/index';
import Heading from '../Heading/index';
import * as Styled from './styled.js';
import Button from '../Button/index';
import { socket } from '../../constants/socket.js';
import ChatContextProvider, {
    ChatContext,
} from '../../contexts/ChatContextProvider';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import useChats from '../../hooks/useChats';

const Messages = ({ children }) => {
    const connectedSocket = socket.connect();
    const useChat = useChats();
    const { isAuth } = useContext(AuthContext);
    const { chats, isLoaded } = useContext(ChatContext);
    return (
        <Container>
            <Heading underlined> Messages </Heading>
            <Styled.SidebarContainer>
                <Styled.List>
                    {isAuth ? (
                        isLoaded ? (
                            chats.map((chat) => (
                                <Styled.List key={chat.id}>
                                    {chat.Users.map((user) => (
                                        <Styled.Item key={user.id}>
                                            {user.firstName}
                                        </Styled.Item>
                                    ))}
                                </Styled.List>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )
                    ) : (
                        <div>Authenticating...</div>
                    )}
                </Styled.List>
            </Styled.SidebarContainer>
        </Container>
    );

    //return (
    //    <Styled.SidebarContainer>
    //        <Heading underlined>Messages View</Heading>
    //        {isAuth ? <div>Hello</div> : null}
    //    </Styled.SidebarContainer>
    //);
};

export default Messages;

import Container from '../Container/index';
import Heading from '../Heading/index';
import * as Styled from './styled.js';
import Button from '../Button/index';
import { socket } from '../../constants/socket.js';
import { useChats } from '../../hooks/useChats';

const Messages = ({ children }) => {
    const connectedSocket = socket.connect();
    const getChats = useChats();
    return (
        <Container>
            <Heading underlined>Messages View</Heading>
            {getChats}
        </Container>
    );
};

export default Messages;

import Container from '../Container/index';
import Heading from '../Heading/index';
import * as Styled from './styled';
import Button from '../Button/index';
import { socket } from '../../constants/socket.js';

const Messages = ({ children }) => {
    return (
        socket.connect(),
        (
            <Container>
                <Heading>Messages View</Heading>
            </Container>
        )
    );
};

export default Messages;

import { Link } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import ROUTES from '../../constants/routes';

const ChatsMessage = () => {
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Box>
                    <Heading large>Heads up</Heading>
                    <Styled.Paragraph>
                        You don't have any active chats. Try to make some
                        connections and come back here to exchange messages.
                    </Styled.Paragraph>
                    <Link to={ROUTES.home}>
                        <Button outlined>Home page</Button>
                    </Link>
                </Styled.Box>
            </Styled.Wrapper>
        </Container>
    );
};

export default ChatsMessage;

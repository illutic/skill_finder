import { Link } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';

const AuthMessage = () => {
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading>Log in or Sign up</Heading>
                <Styled.Paragraph>
                    You must be logged in to use this feature.
                </Styled.Paragraph>
                <Styled.Buttons>
                    <Link to="/login">
                        <Button>Log in</Button>
                    </Link>
                    <Link to="/signup">
                        <Button outlined>Sign up</Button>
                    </Link>
                </Styled.Buttons>
            </Styled.Wrapper>
        </Container>
    );
};

export default AuthMessage;

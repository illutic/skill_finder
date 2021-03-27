import { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import ROUTES from '../../constants/routes';

const AuthMessage = () => {
    const { isAuth } = useContext(AuthContext);

    return isAuth ? (
        <Redirect to={ROUTES.home} />
    ) : (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Box>
                    <Heading large>Log in or Sign up</Heading>
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
                </Styled.Box>
            </Styled.Wrapper>
        </Container>
    );
};

export default AuthMessage;

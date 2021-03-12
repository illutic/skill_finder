import * as Styled from './styled';
import Container from '../Container/index';

const Navigation = () => {
    return (
        <Styled.Navigation>
            <Container>
                <Styled.List>
                    <Styled.Item>
                        <Styled.Link to="/" activeClassName="active" exact>
                            Home
                        </Styled.Link>
                    </Styled.Item>
                    <Styled.Item>
                        <Styled.Link
                            to="/messages"
                            activeClassName="active"
                            exact
                        >
                            Messages
                        </Styled.Link>
                    </Styled.Item>
                    <Styled.Item>
                        <Styled.Link
                            to="/settings"
                            activeClassName="active"
                            exact
                        >
                            Settings
                        </Styled.Link>
                    </Styled.Item>
                    <Styled.Item>{/* <Bell/> */}</Styled.Item>
                </Styled.List>
            </Container>
        </Styled.Navigation>
    );
};

export default Navigation;

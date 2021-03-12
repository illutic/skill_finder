import { NavLink } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';

const Navigation = () => {
    return (
        <Container>
            <Styled.Navigation>
                <Styled.List>
                    <Styled.Item>
                        <NavLink to="/">Home</NavLink>
                    </Styled.Item>
                    <Styled.Item>
                        <NavLink to="/messages">Messages</NavLink>
                    </Styled.Item>
                    <Styled.Item>
                        <NavLink to="/settings">Settings</NavLink>
                    </Styled.Item>
                </Styled.List>
            </Styled.Navigation>
        </Container>
    );
};

export default Navigation;

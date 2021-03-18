import Container from '../Container/index';
import Heading from '../Heading/index';
import * as Styled from './sidebar-styled.js';
import Button from '../Button/index';
import { socket } from '../../constants/socket.js';
import { useContext } from 'react';
import { NavigationContext } from '../../contexts/NavigationContextProvider';

const Messages = ({ children }) => {
    const { isActive, toggleNavigation } = useContext(NavigationContext);
    return (
        socket.connect(),
        (
            <Styled.SidebarContainer>
                <Styled.Link
                    to="/chat/:id"
                    activeClassName="active"
                    onClick={toggleNavigation}
                    exact
                >
                    Messages
                </Styled.Link>
            </Styled.SidebarContainer>
        )
        //<Container>
        //    <Heading underlined>Messages View</Heading>
        //</Container>
    );
};

export default Messages;

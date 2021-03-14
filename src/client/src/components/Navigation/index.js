import { useContext } from 'react';
import { NavigationContext } from '../../contexts/NavigationContextProvider';
import * as Styled from './styled';
import Container from '../Container/index';
import ProfilePhoto from '../ProfilePhoto/index';
import NotificationButton from '../NotificationButton/index';
import NavigationButton from '../NavigationButton/index';
// >>> Temporary
import source from '../../assets/profile.jpg';
// <<<

const Navigation = () => {
    const { isActive, toggleNavigation } = useContext(NavigationContext);

    return (
        <Styled.Wrapper>
            <Styled.Bar>
                <Container>
                    <Styled.Relative>
                        <Styled.Box>
                            <ProfilePhoto src={source} />
                            <Styled.Buttons>
                                <NotificationButton />
                                <NavigationButton onClick={toggleNavigation} />
                            </Styled.Buttons>
                        </Styled.Box>
                        <Styled.PositionedSearchBar />
                    </Styled.Relative>
                </Container>
            </Styled.Bar>
            <Styled.Navigation>
                <Container>
                    <Styled.List active={isActive}>
                        <Styled.Item>
                            <Styled.Link
                                to="/"
                                activeClassName="active"
                                onClick={toggleNavigation}
                                exact
                            >
                                Home
                            </Styled.Link>
                        </Styled.Item>
                        <Styled.Item>
                            <Styled.Link
                                to="/messages"
                                activeClassName="active"
                                onClick={toggleNavigation}
                                exact
                            >
                                Messages
                            </Styled.Link>
                        </Styled.Item>
                        <Styled.Item>
                            <Styled.Link
                                to="/settings"
                                activeClassName="active"
                                onClick={toggleNavigation}
                                exact
                            >
                                Settings
                            </Styled.Link>
                        </Styled.Item>
                    </Styled.List>
                </Container>
            </Styled.Navigation>
        </Styled.Wrapper>
    );
};

export default Navigation;

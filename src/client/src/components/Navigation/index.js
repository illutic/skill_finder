import { useContext } from 'react';
import useLogout from '../../hooks/useLogout';
import { NavigationContext } from '../../contexts/NavigationContextProvider';
import * as Styled from './styled';
import Container from '../Container/index';
import ProfilePhoto from '../ProfilePhoto/index';
import NotificationButton from '../NotificationButton/index';
import NavigationButton from '../NavigationButton/index';

const Navigation = () => {
    const { isActive, toggleNavigation } = useContext(NavigationContext);
    const logOut = useLogout();

    return (
        <Styled.Wrapper>
            <Styled.Bar>
                <Container>
                    <Styled.Relative>
                        <Styled.Box>
                            <ProfilePhoto />
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
                    <Styled.RestrictedRelative>
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
                            <Styled.Item>
                                <Styled.LogoutWrapper>
                                    <Styled.LogoutButton onDoubleClick={logOut}>
                                        Log out
                                    </Styled.LogoutButton>
                                </Styled.LogoutWrapper>
                            </Styled.Item>
                        </Styled.List>
                    </Styled.RestrictedRelative>
                </Container>
            </Styled.Navigation>
        </Styled.Wrapper>
    );
};

export default Navigation;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { NavigationContext } from '../../contexts/NavigationContextProvider';
import { AuthContext } from '../../contexts/AuthContextProvider';
import * as Styled from './styled';
import Container from '../Container/index';
import ProfilePhoto from '../ProfilePhoto/index';
import NotificationButton from '../NotificationButton/index';
import NavigationButton from '../NavigationButton/index';

const Navigation = () => {
    const { isActive, toggleNavigation } = useContext(NavigationContext);
    const { isAuth } = useContext(AuthContext);
    const logOut = useLogout();

    return (
        <Styled.Wrapper>
            <Styled.Bar>
                <Container>
                    <Styled.Relative>
                        <Styled.Box>
                            <ProfilePhoto src="https://picsum.photos/100/100" />
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
                                <Styled.ActionWrapper>
                                    {isAuth ? (
                                        <Styled.ActionButton
                                            onClick={() => {
                                                logOut();
                                                toggleNavigation();
                                            }}
                                        >
                                            Log out
                                        </Styled.ActionButton>
                                    ) : (
                                        <Styled.ActionButton
                                            onClick={toggleNavigation}
                                        >
                                            <Link to="/login">Log in</Link>
                                        </Styled.ActionButton>
                                    )}
                                </Styled.ActionWrapper>
                            </Styled.Item>
                        </Styled.List>
                    </Styled.RestrictedRelative>
                </Container>
            </Styled.Navigation>
        </Styled.Wrapper>
    );
};

export default Navigation;

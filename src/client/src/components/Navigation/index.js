import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from '../../contexts/NavigationContextProvider';
import { LogoutModalContext } from '../../contexts/LogoutModalContextProvider';
import { AuthContext } from '../../contexts/AuthContextProvider';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import Container from '../Container/index';
import NotificationsPanel from '../NotificationsPanel/index';
import ProfilePhoto from '../ProfilePhoto/index';
import NavigationButton from '../NavigationButton/index';
import ROUTES from '../../constants/routes';

const Navigation = () => {
    const { isActive, toggleNavigation, closeNavigation } = useContext(
        NavigationContext
    );
    const { showLogoutModal } = useContext(LogoutModalContext);
    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener('click', closeNavigation);
        return () => {
            window.removeEventListener('click', closeNavigation);
        };
    }, [closeNavigation]);

    return (
        <Styled.Wrapper onClick={stopPropagation}>
            <Styled.Bar>
                <Container>
                    <Styled.Relative>
                        <Styled.Box>
                            <Link to={isAuth ? '' : ROUTES.protected}>
                                <ProfilePhoto src="" />
                            </Link>
                            <Styled.Buttons>
                                {isAuth ? <NotificationsPanel /> : null}
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
                                    to={ROUTES.home}
                                    onClick={closeNavigation}
                                    exact
                                >
                                    Home
                                </Styled.Link>
                            </Styled.Item>
                            <Styled.Item>
                                <Styled.Link
                                    to={ROUTES.messages}
                                    onClick={closeNavigation}
                                >
                                    Messages
                                </Styled.Link>
                            </Styled.Item>
                            <Styled.Item>
                                <Styled.Link
                                    to={ROUTES.settings}
                                    onClick={closeNavigation}
                                    exact
                                >
                                    Settings
                                </Styled.Link>
                            </Styled.Item>
                            <Styled.Item>
                                <Styled.Controls>
                                    {isAuth ? (
                                        <Styled.Control
                                            onClick={() => {
                                                showLogoutModal();
                                                closeNavigation();
                                            }}
                                        >
                                            Log out
                                        </Styled.Control>
                                    ) : (
                                        <Link to={ROUTES.login}>
                                            <Styled.Control
                                                onClick={closeNavigation}
                                            >
                                                Log in
                                            </Styled.Control>
                                        </Link>
                                    )}
                                </Styled.Controls>
                            </Styled.Item>
                        </Styled.List>
                    </Styled.RestrictedRelative>
                </Container>
            </Styled.Navigation>
        </Styled.Wrapper>
    );
};

export default Navigation;

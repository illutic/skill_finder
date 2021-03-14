import * as Styled from './styled';
import Container from '../Container/index';
import ProfilePhoto from '../ProfilePhoto/index';
import NotificationButton from '../NotificationButton/index';
import NavigationButton from '../NavigationButton/index';
import SearchBar from '../SearchBar/index';
// >>> Temporary
import source from '../../assets/profile.jpg';
// <<<

const Navigation = () => {
    return (
        <Styled.Wrapper>
            <Styled.Bar>
                <Container>
                    <Styled.Box>
                        <ProfilePhoto src={source} />
                        <Styled.Buttons>
                            <NotificationButton active />
                            <NavigationButton />
                        </Styled.Buttons>
                    </Styled.Box>
                    <SearchBar />
                </Container>
            </Styled.Bar>
            <Styled.Navigation>
                <Container>
                    <Styled.List active>
                        {/* ^ Toggle */}
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
                    </Styled.List>
                </Container>
            </Styled.Navigation>
        </Styled.Wrapper>
    );
};

export default Navigation;

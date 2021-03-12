import * as Styled from './styled';
import Container from '../Container/index';
import NavigationProfile from '../NavigationProfile/index';
import SearchBar from '../SearchBar/index';
import NotificationButton from '../NotificationButton';

const Navigation = () => {
    return (
        <Styled.Navigation>
            <Container>
                <div>
                    <NavigationProfile />
                    <SearchBar />
                </div>
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
                    <Styled.Item>
                        <NotificationButton />
                    </Styled.Item>
                </Styled.List>
            </Container>
        </Styled.Navigation>
    );
};

export default Navigation;

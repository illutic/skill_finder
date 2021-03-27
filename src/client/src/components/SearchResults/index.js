import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useSearchEngine from '../../hooks/api/useSearchEngine';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';
import * as Styled from './styled';
import LoadingScreen from '../LoadingScreen';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import RequestActions from '../RequestActions';
import ProfileThumbnail from '../ProfileThumbnail';
import defaultProfilePhoto from '../../assets/default.jpg';
import ROUTES from '../../constants/routes';

const SearchResults = () => {
    const { isAuth } = useContext(AuthContext);
    const { user: currentUser } = useContext(UserContext);
    const { query, areResultsLoading, results } = useSearchEngine();

    return areResultsLoading ? (
        <LoadingScreen />
    ) : results ? (
        <Container spaced>
            <Styled.Wrapper>
                <Heading underlined>
                    Showing results for {results?.name}
                </Heading>
                <Styled.Entries>
                    {results?.Users?.map((user) => {
                        return (
                            <Styled.Entry key={user?.id}>
                                <Link to={`/profile/${user?.id}`}>
                                    <ProfileThumbnail
                                        name={`${user?.firstName} ${
                                            user?.lastName
                                        } ${
                                            user?.id === currentUser?.id
                                                ? '(you)'
                                                : ''
                                        }`}
                                        title={user?.title}
                                        photo={
                                            user?.profilePhoto
                                                ? user.profilePhoto
                                                : defaultProfilePhoto
                                        }
                                    />
                                </Link>
                                <Styled.Buttons>
                                    <Link to={`/profile/${user?.id}`}>
                                        <Button outlined>View profile</Button>
                                    </Link>
                                    {isAuth ? (
                                        user?.id === currentUser?.id ? (
                                            <Link to={ROUTES.settings}>
                                                <Button outlined fixed>
                                                    Edit profile
                                                </Button>
                                            </Link>
                                        ) : (
                                            <RequestActions userId={user?.id} />
                                        )
                                    ) : null}
                                </Styled.Buttons>
                            </Styled.Entry>
                        );
                    })}
                </Styled.Entries>
            </Styled.Wrapper>
        </Container>
    ) : (
        <Container spaced>
            <Styled.Wrapper>
                <Heading underlined>No results for {query}</Heading>
            </Styled.Wrapper>
        </Container>
    );
};

export default SearchResults;

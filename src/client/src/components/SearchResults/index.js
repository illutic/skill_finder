import { Link } from 'react-router-dom';
import useSearchEngine from '../../hooks/api/useSearchEngine';
import useRequest from '../../hooks/api/useRequest';
import * as Styled from './styled';
import LoadingScreen from '../LoadingScreen';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import ProfileThumbnail from '../ProfileThumbnail';
import defaultProfilePhoto from '../../assets/default.jpg';

const SearchResults = () => {
    const { query, results, loaded } = useSearchEngine();
    const { sendRequest } = useRequest();

    return loaded ? (
        results ? (
            <Container spaced>
                <Styled.Wrapper>
                    <Heading underlined>
                        Showing results for {results.name}
                    </Heading>
                    <Styled.Entries>
                        {results.Users.map((user) => {
                            return (
                                <Styled.Entry key={user?.id}>
                                    <Link to={`/profile/${user?.id}`}>
                                        <ProfileThumbnail
                                            name={`${user?.firstName} ${user?.lastName}`}
                                            title={user?.title}
                                            photo={
                                                user.profilePhoto
                                                    ? user?.profilePhoto
                                                    : defaultProfilePhoto
                                            }
                                        />
                                    </Link>
                                    <Styled.Buttons>
                                        <Link to={`/profile/${user?.id}`}>
                                            <Button outlined>
                                                View profile
                                            </Button>
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                sendRequest(user?.id)
                                            }
                                        >
                                            Reach out
                                        </Button>
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
        )
    ) : (
        <LoadingScreen />
    );
};

export default SearchResults;

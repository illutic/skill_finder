import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import ProfilePhoto from '../ProfilePhoto/index';
import Button from '../Button/index';

const SearchResults = ({ location }) => {
    const [query, setQuery] = useState();

    useEffect(() => {
        const queryString = location.search.substring(1);
        const searchParams = new URLSearchParams(queryString);
        const decodedQuery = searchParams.get('query');
        setQuery(decodedQuery);
        // <<< API call >>>
    }, [location.search]);

    return (
        <Container>
            <Styled.Wrapper>
                <Heading>Results for {query}</Heading>
                <Styled.Entries>
                    <Styled.Entry>
                        <Link to="/profile/1">
                            <Styled.User>
                                <ProfilePhoto
                                    src="https://picsum.photos/100/100"
                                    size={75}
                                />
                                <Styled.Details>
                                    <Styled.Name>John Smith</Styled.Name>
                                    <Styled.Title>
                                        Teachnig Mathematics
                                    </Styled.Title>
                                </Styled.Details>
                            </Styled.User>
                        </Link>
                        <Styled.Buttons>
                            <Link to="/profile/1">
                                <Button outlined>View profile</Button>
                            </Link>
                            <Button>Reach out</Button>
                        </Styled.Buttons>
                    </Styled.Entry>
                    <Styled.Entry>
                        <Link to="/profile/1">
                            <Styled.User>
                                <ProfilePhoto
                                    src="https://picsum.photos/100/100"
                                    size={75}
                                />
                                <Styled.Details>
                                    <Styled.Name>Ian Jones</Styled.Name>
                                    <Styled.Title>
                                        Mathematics Passionate
                                    </Styled.Title>
                                </Styled.Details>
                            </Styled.User>
                        </Link>
                        <Styled.Buttons>
                            <Link to="/profile/1">
                                <Button outlined>View profile</Button>
                            </Link>
                            <Button>Reach out</Button>
                        </Styled.Buttons>
                    </Styled.Entry>
                </Styled.Entries>
            </Styled.Wrapper>
        </Container>
    );
};

export default withRouter(SearchResults);

import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import ProfilePhoto from '../ProfilePhoto/index';
import Button from '../Button/index';
import ProfileThumbnail from '../ProfileThumbnail';

const SearchResults = ({ location }) => {
    const [query, setQuery] = useState();

    useEffect(() => {
        const queryString = location.search.substring(1);
        const searchParams = new URLSearchParams(queryString);
        const decodedQuery = searchParams.get('query');
        setQuery(decodedQuery);
    }, [location.search]);

    return (
        <Container spaced>
            <Styled.Wrapper>
                <Heading underlined>Results for {query}</Heading>
                <Styled.Entries>
                    <Styled.Entry>
                        <Link to="/profile/1">
                            <ProfileThumbnail
                                name="John Smith"
                                title="Teaching Mathematics"
                                photo="https://picsum.photos/100/100"
                            />
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
                            <ProfileThumbnail
                                name="Ian Jones"
                                title="Mathematics Passionate"
                                photo="https://picsum.photos/100/100"
                            />
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
                            <ProfileThumbnail
                                name="Ian Jones"
                                title="Mathematics Passionate"
                                photo="https://picsum.photos/100/100"
                            />
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

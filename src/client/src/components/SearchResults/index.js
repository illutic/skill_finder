import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';

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
            <Heading>Results for {query}</Heading>
            <Styled.Results>
                <Styled.Result></Styled.Result>
            </Styled.Results>
        </Container>
    );
};

export default withRouter(SearchResults);

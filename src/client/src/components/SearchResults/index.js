import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../Container/index';
import Subheading from '../Subheading/index';

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
            <Subheading underlined>Results for {query}</Subheading>
        </Container>
    );
};

export default withRouter(SearchResults);

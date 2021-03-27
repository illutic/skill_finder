import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ENDPOINTS from '../../constants/endpoints';

const useSearchEngine = () => {
    const location = useLocation();
    const [query, setQuery] = useState();
    const [results, setResults] = useState();
    const [areResultsLoading, setAreResultsLoading] = useState(true);

    useEffect(() => {
        const queryString = location.search.substring(1);
        const searchParams = new URLSearchParams(queryString);
        const query = searchParams.get('query');
        setQuery(query);
    }, [location.search]);

    useEffect(() => {
        const getResults = async () => {
            if (!query) {
                return;
            }
            const response = await fetch(`${ENDPOINTS.skill}/${query}`);
            const data = await response.json();
            setAreResultsLoading(false);
            if (response.ok) {
                setResults(data);
                return;
            }
            setResults(null);
        };
        getResults();
    }, [query]);

    return { query, areResultsLoading, results };
};

export default useSearchEngine;

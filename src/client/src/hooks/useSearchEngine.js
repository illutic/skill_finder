import { useState, useEffect } from 'react';
import ENDPOINTS from '../constants/endpoints';

const useSearchEngine = () => {
    const [results, setResults] = useState();
    const [query, setQuery] = useState();

    useEffect(() => {
        const getResults = async () => {
            if (!query) {
                return;
            }
            const response = await fetch(`${ENDPOINTS.skill}/${query}`);
            const data = await response.json();
            if (data.length) {
                setResults(data[0].Users);
                return;
            }
            setResults([]);
        };
        getResults();
    }, [query]);

    return { results, query, setQuery };
};

export default useSearchEngine;

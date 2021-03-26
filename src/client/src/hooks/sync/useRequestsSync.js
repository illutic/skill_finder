import { useContext, useCallback } from 'react';
import { RequestsContext } from '../../contexts/RequestsContextProvider.js';
import ENDPOINTS from '../../constants/endpoints.js';

const useRequestsSync = () => {
    const { setRequests } = useContext(RequestsContext);

    const syncRequests = useCallback(async () => {
        const response = await fetch(`${ENDPOINTS.requests}`);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            setRequests(data);
            return;
        }
        setRequests(null);
    }, [setRequests]);

    return syncRequests;
};
export default useRequestsSync;

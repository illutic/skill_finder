import { useContext, useCallback } from 'react';
import { RequestsContext } from '../contexts/RequestsContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useRequestsSync = () => {
    const { setRequests } = useContext(RequestsContext);

    const syncRequests = useCallback(async () => {
        const response = await fetch(`${ENDPOINTS.request}`);
        const data = await response.json();
        if (response.ok) {
            setRequests(data.reverse());
            return;
        }
        setRequests(null);
    }, [setRequests]);

    return { syncRequests };
};
export default useRequestsSync;

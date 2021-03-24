import { useContext, useCallback } from 'react';
import { RequestsContext } from '../contexts/RequestsContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useRequestsSync = () => {
    const { setRequests } = useContext(RequestsContext);

    const syncRequests = useCallback(async () => {
        const requests = await fetch(`${ENDPOINTS.request}`);
        const data = await requests.json();
        setRequests(data);
    }, [setRequests]);

    return { syncRequests };
};
export default useRequestsSync;

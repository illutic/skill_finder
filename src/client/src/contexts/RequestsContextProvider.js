import { createContext, useState } from 'react';

export const RequestsContext = createContext();

const RequestsContextProvider = ({ children }) => {
    const [requests, setRequests] = useState([]);

    return (
        <RequestsContext.Provider value={{ requests, setRequests }}>
            {children}
        </RequestsContext.Provider>
    );
};

export default RequestsContextProvider;

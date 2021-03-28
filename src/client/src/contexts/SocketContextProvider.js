import { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
export const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(
        io({
            autoConnect: false,
            reconnection: false,
            forceNew: true,
        })
    );

    return (
        <SocketContext.Provider value={{ socket, setSocket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;

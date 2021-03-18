import { createContext, useState } from 'react';

export const ChatsContext = createContext();

const ChatsContextProvider = ({ children }) => {
    const [chats, setChats] = useState([]);

    return (
        <ChatsContext.Provider value={{ chats, setChats }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsContextProvider;

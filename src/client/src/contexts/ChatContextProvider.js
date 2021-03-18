import { useState, createContext } from 'react';
import { GetChatrooms } from '../hooks/useChats';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chats, setChats] = useState([]);
    return (
        <ChatContext.Provider value={{ chats, isLoaded, error }}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatContextProvider;

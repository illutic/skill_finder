import { useState, createContext } from 'react';

export const ChatContext = createContext();
const ChatContextProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [chats, setChats] = useState([]);
    return (
        <ChatContext.Provider
            value={{ chats, setChats, isLoaded, setIsLoaded }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatContextProvider;

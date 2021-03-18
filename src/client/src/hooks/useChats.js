import { useEffect, useContext } from 'react';
import { ChatContext } from '../contexts/ChatContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useChats = () => {
    const { setChats, setIsLoaded } = useContext(ChatContext);
    useEffect(() => {
        const getChats = async () => {
            const response = await fetch(ENDPOINTS.chats);
            const data = await response.json();
            setChats(data.chats);
            setIsLoaded(true);
        };
        getChats();
    }, [setChats, setIsLoaded]);
};
export default useChats;

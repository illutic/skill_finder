import { useEffect, useContext } from 'react';
import { ChatsContext } from '../contexts/ChatsContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useChatsSync = () => {
    const { setChats } = useContext(ChatsContext);

    useEffect(() => {
        const getChats = async () => {
            const response = await fetch(ENDPOINTS.chats);
            const data = await response.json();
            setChats(data.chats);
        };
        getChats();
    }, [setChats]);
};
export default useChatsSync;

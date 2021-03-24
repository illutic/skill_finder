import { useEffect, useContext, useCallback } from 'react';
import { ChatsContext } from '../contexts/ChatsContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useChatsSync = () => {
    const { setChats } = useContext(ChatsContext);

    const syncChats = useCallback(async () => {
        const response = await fetch(ENDPOINTS.chats);
        const data = await response.json();
        setChats(data.chats);
    }, [setChats]);

    useEffect(() => {
        syncChats();
    }, [syncChats]);

    return { syncChats };
};
export default useChatsSync;

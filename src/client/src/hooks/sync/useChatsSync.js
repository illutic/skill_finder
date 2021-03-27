import { useContext, useCallback } from 'react';
import { ChatsContext } from '../../contexts/ChatsContextProvider.js';
import ENDPOINTS from '../../constants/endpoints.js';

const useChatsSync = () => {
    const { setChats } = useContext(ChatsContext);

    const syncChats = useCallback(async () => {
        const response = await fetch(ENDPOINTS.chats);
        const data = await response.json();
        if (response.ok) {
            setChats(data.chats);
            return;
        }
        setChats(null);
    }, [setChats]);

    return syncChats;
};
export default useChatsSync;

import { useCallback } from 'react';
import useUserSync from './useUserSync';
import useChatsSync from './useChatsSync';
import useNotificationsSync from './useNotificationsSync';

const useGlobalDataSync = () => {
    const syncUser = useUserSync();
    const syncChats = useChatsSync();
    const syncNotifications = useNotificationsSync();

    const syncGlobalData = useCallback(() => {
        syncUser();
        syncChats();
        syncNotifications();
    }, [syncUser, syncChats, syncNotifications]);

    return syncGlobalData;
};

export default useGlobalDataSync;

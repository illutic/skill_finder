import { useCallback } from 'react';
import useUserSync from './useUserSync';
import useChatsSync from './useChatsSync';
import useRequestsSync from './useRequestsSync';
import useNotificationsSync from './useNotificationsSync';

const useGlobalDataSync = () => {
    const syncUser = useUserSync();
    const syncChats = useChatsSync();
    const syncRequests = useRequestsSync();
    const syncNotifications = useNotificationsSync();

    const syncGlobalData = useCallback(() => {
        syncUser();
        syncChats();
        syncRequests();
        syncNotifications();
    }, [syncUser, syncChats, syncRequests, syncNotifications]);

    return syncGlobalData;
};

export default useGlobalDataSync;

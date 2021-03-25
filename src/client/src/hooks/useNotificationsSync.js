import { useContext, useCallback } from 'react';
import { NotificationsContext } from '../contexts/NotificationsContextProvider.js';
import ENDPOINTS from '../constants/endpoints.js';

export const useNotificationsSync = () => {
    const { setNotifications } = useContext(NotificationsContext);

    const syncNotifications = useCallback(async () => {
        const response = await fetch(`${ENDPOINTS.notifications}`);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            setNotifications(data.reverse());
            return;
        }
        setNotifications(null);
    }, [setNotifications]);

    return { syncNotifications };
};
export default useNotificationsSync;

import { useCallback } from 'react';
import useNotificationsSync from '../sync/useNotificationsSync';
import ENDPOINTS from '../../constants/endpoints';

const useDeleteNotification = () => {
    const syncNotifications = useNotificationsSync();

    const deleteNotification = useCallback(
        async (notificationId) => {
            const response = await fetch(ENDPOINTS.notifications, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    notificationId,
                }),
            });
            if (response.ok) {
                syncNotifications();
            }
        },
        [syncNotifications]
    );

    return deleteNotification;
};

export default useDeleteNotification;

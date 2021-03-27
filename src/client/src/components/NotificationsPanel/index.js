import { useState, useEffect, useContext } from 'react';
import { NotificationsContext } from '../../contexts/NotificationsContextProvider';
import * as Styled from './styled';
import NotificationsButton from '../NotificationsButton/index';
import Notification from '../Notification/index';

const NotificationsPanel = () => {
    const { notifications } = useContext(NotificationsContext);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotificationsPanel = () => {
        setShowNotifications((previous) => !previous);
    };

    const hideNotificationsPanel = () => {
        setShowNotifications(false);
    };

    useEffect(() => {
        window.addEventListener('click', hideNotificationsPanel);
        return () => {
            window.removeEventListener('click', hideNotificationsPanel);
        };
    }, []);

    return (
        <>
            <NotificationsButton
                active={showNotifications}
                onClick={toggleNotificationsPanel}
            />
            <Styled.Notifications active={showNotifications}>
                {notifications?.length ? (
                    notifications.map((notification) => (
                        <Notification
                            key={notification?.id}
                            data={notification}
                        />
                    ))
                ) : (
                    <Styled.Message>
                        You're up to date with the news!
                    </Styled.Message>
                )}
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

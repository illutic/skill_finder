import { useState, useEffect, useContext } from 'react';
import useDeleteNotification from '../../hooks/api/useDeleteNotification';
import { NotificationsContext } from '../../contexts/NotificationsContextProvider';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';
import defaultProfilePhoto from '../../assets/default.jpg';
import RequestActions from '../RequestActions';

const NotificationsPanel = () => {
    const { notifications } = useContext(NotificationsContext);
    const deleteNotification = useDeleteNotification();
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
                {notifications?.length
                    ? notifications.map((notification) => (
                          // Create Notification components for each
                          // notification type. Pass
                          // content={notification.content} property.
                          <Styled.Notification key={notification.id}>
                              <Styled.Group>
                                  <ProfilePhoto
                                      src={
                                          notification.content.user
                                              ?.profilePhoto
                                              ? notification.content.user
                                                    .profilePhoto
                                              : defaultProfilePhoto
                                      }
                                      size={50}
                                  />
                              </Styled.Group>
                              <Styled.Content>
                                  <Styled.Group>
                                      {`${notification.content.user.firstName} ${notification.content.user.lastName} requested your help.`}
                                  </Styled.Group>

                                  <Styled.Group>
                                      <CloseButton
                                          onClick={() =>
                                              deleteNotification(
                                                  notification.id
                                              )
                                          }
                                      />
                                      <RequestActions
                                          userId={notification.content.user.id}
                                      />
                                  </Styled.Group>
                              </Styled.Content>
                          </Styled.Notification>
                      ))
                    : "You're all caught up"}
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

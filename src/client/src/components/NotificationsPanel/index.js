import { useState, useEffect, useContext } from 'react';
import useRequest from '../../hooks/api/useRequest';
import useNotification from '../../hooks/api/useNotification';
import { NotificationsContext } from '../../contexts/NotificationsContextProvider';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import NotificationsButton from '../NotificationsButton/index';
import Button from '../Button/index';
import CloseButton from '../CloseButton/index';
import defaultProfilePhoto from '../../assets/default.jpg';

const NotificationsPanel = () => {
    const { notifications } = useContext(NotificationsContext);
    const { acceptRequest, denyRequest } = useRequest();
    const { deleteNotification } = useNotification();
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
                                      {notification.type}
                                  </Styled.Group>

                                  <Styled.Group>
                                      <CloseButton
                                          onClick={() =>
                                              deleteNotification(
                                                  notification.id
                                              )
                                          }
                                      />
                                      <Button
                                          onClick={() =>
                                              acceptRequest(
                                                  notification.content.requestId
                                              )
                                          }
                                      >
                                          Accept
                                      </Button>
                                      <Button
                                          onClick={() =>
                                              denyRequest(
                                                  notification.content.requestId
                                              )
                                          }
                                      >
                                          Deny
                                      </Button>
                                  </Styled.Group>
                              </Styled.Content>
                          </Styled.Notification>
                      ))
                    : null}
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

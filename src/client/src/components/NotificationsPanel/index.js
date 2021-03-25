import { useState, useEffect, useContext } from 'react';
import useRequest from '../../hooks/useRequest';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import { NotificationsContext } from '../../contexts/NotificationsContextProvider';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';
import Button from '../Button/index';

const NotificationsPanel = () => {
    const { notifications } = useContext(NotificationsContext);
    const { acceptRequest, denyRequest } = useRequest();
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
                          <Styled.Notification key={notification.id}>
                              <Styled.Group>
                                  <ProfilePhoto
                                      src="https://picsum.photos/100/100"
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
                                              denyRequest(
                                                  notification.content.requestId
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

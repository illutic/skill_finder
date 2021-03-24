import { useState, useEffect, useContext } from 'react';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';
import { UserContext } from '../../contexts/UserContextProvider';
import { useNotificationSocket } from '../../hooks/useNotificationSocket';

const NotificationsPanel = () => {
    const { user } = useContext(UserContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const { notifications } = useNotificationSocket();
    /** When loading from the database (On reload) include names to display! */
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
    // Get Received Requests through the API and display them
    // Render 2 buttons for accept/deny
    return (
        <>
            <NotificationsButton
                active={showNotifications}
                onClick={toggleNotificationsPanel}
            />
            <Styled.Notifications active={showNotifications}>
                {notifications?.length
                    ? notifications.map((request) => {
                          if (request.toId === user.id) {
                              return (
                                  <Styled.Notification key={request.id}>
                                      <Styled.Group>
                                          <ProfilePhoto
                                              src="https://picsum.photos/100/100"
                                              size={50}
                                          />
                                      </Styled.Group>
                                      <Styled.Content>
                                          <Styled.Group>
                                              {request.name} has requested your
                                              help!
                                          </Styled.Group>
                                          <Styled.Group>
                                              <CloseButton />
                                          </Styled.Group>
                                      </Styled.Content>
                                  </Styled.Notification>
                              );
                          } else {
                              return (
                                  <Styled.Notification key={request.id}>
                                      <Styled.Group>
                                          <ProfilePhoto
                                              src="https://picsum.photos/100/100"
                                              size={50}
                                          />
                                      </Styled.Group>
                                      <Styled.Content>
                                          <Styled.Group>
                                              You have requested {request.name}{' '}
                                              for help!
                                          </Styled.Group>
                                          <Styled.Group>
                                              <CloseButton />
                                          </Styled.Group>
                                      </Styled.Content>
                                  </Styled.Notification>
                              );
                          }
                      })
                    : null}
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

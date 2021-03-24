import { useState, useEffect, useContext } from 'react';
import useRequest from '../../hooks/useRequest';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import { RequestsContext } from '../../contexts/RequestsContextProvider';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';
import Button from '../Button/index';

const NotificationsPanel = () => {
    const { requests } = useContext(RequestsContext);
    const { acceptRequest, denyRequest } = useRequest();
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotificationsPanel = () => {
        setShowNotifications((previous) => !previous);
    };

    const hideNotificationsPanel = () => {
        setShowNotifications(false);
    };

    useEffect(() => {
        console.log(requests);
    }, [requests]);

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
                {/* We should iterate through notifications, not requests here. */}
                {requests?.length
                    ? requests.map((request) => {
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
                                          {request.fromId} has requested your
                                          help.
                                      </Styled.Group>

                                      <Styled.Group>
                                          <CloseButton
                                              onClick={() =>
                                                  denyRequest(request.id)
                                              }
                                          />
                                          <Button
                                              onClick={() =>
                                                  acceptRequest(request.id)
                                              }
                                          >
                                              Accept
                                          </Button>
                                      </Styled.Group>
                                  </Styled.Content>
                              </Styled.Notification>
                          );
                      })
                    : null}
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

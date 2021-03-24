import { useState, useEffect, useContext } from 'react';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';
import { UserContext } from '../../contexts/UserContextProvider';
import { useRequest } from '../../hooks/useRequest';
import { Button } from '../NotificationsButton/styled';
const NotificationsPanel = () => {
    const { user } = useContext(UserContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const { requests, setRequestId, setRequests } = useRequest();
    const toggleNotificationsPanel = () => {
        setShowNotifications((previous) => !previous);
    };

    const hideNotificationsPanel = () => {
        setShowNotifications(false);
    };

    const removeRequestLocally = (requestId) => {
        setRequests((previousRequests) =>
            previousRequests.filter((request) => request.id !== requestId)
        );
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
                {requests?.length
                    ? requests.map((request) => {
                          // if the request id referes to current user
                          if (request.toId === user.id) {
                              // if the request has been answered
                              if (!request.outcome) {
                                  return (
                                      <Styled.Notification key={request.id}>
                                          <Styled.Group>
                                              <ProfilePhoto
                                                  src="https://picsum.photos/100/100"
                                                  size={50}
                                              />
                                          </Styled.Group>
                                          <Button
                                              onClick={() =>
                                                  setRequestId(request.id)
                                              }
                                          >
                                              Accept
                                          </Button>
                                          <Styled.Content>
                                              <Styled.Group>
                                                  {request.User.firstName} has
                                                  requested your help!
                                              </Styled.Group>

                                              <Styled.Group>
                                                  <CloseButton
                                                      onClick={() =>
                                                          setRequestId(
                                                              request.id
                                                          )
                                                      }
                                                  />
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
                                                  You have {request.outcome}{' '}
                                                  {request.User.firstName}'s
                                                  request!
                                              </Styled.Group>

                                              <Styled.Group>
                                                  <CloseButton
                                                      onClick={() =>
                                                          removeRequestLocally(
                                                              request.id
                                                          )
                                                      }
                                                  />
                                              </Styled.Group>
                                          </Styled.Content>
                                      </Styled.Notification>
                                  );
                              }
                          } else if (request.outcome) {
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
                                              {request.User.firstName}{' '}
                                              {request.outcome} your Request !
                                          </Styled.Group>
                                          <Styled.Group>
                                              <CloseButton
                                                  onClick={() =>
                                                      removeRequestLocally(
                                                          request.id
                                                      )
                                                  }
                                              />
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

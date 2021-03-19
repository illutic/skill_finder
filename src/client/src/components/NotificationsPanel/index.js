import { useState, useEffect } from 'react';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import NotificationsButton from '../NotificationsButton/index';
import CloseButton from '../CloseButton/index';

const NotificationsPanel = () => {
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
                <Styled.Notification>
                    <Styled.Group>
                        <ProfilePhoto
                            src="https://picsum.photos/100/100"
                            size={50}
                        />
                    </Styled.Group>
                    <Styled.Content>
                        <Styled.Group>
                            <Styled.Name>Rich Oswald</Styled.Name> has accepted
                            your help request! You can now contact via messages.
                        </Styled.Group>
                        <Styled.Group>
                            <CloseButton />
                        </Styled.Group>
                    </Styled.Content>
                </Styled.Notification>
                <Styled.Notification>
                    <Styled.Group>
                        <ProfilePhoto
                            src="https://picsum.photos/100/100"
                            size={50}
                        />
                    </Styled.Group>
                    <Styled.Content>
                        <Styled.Group>
                            <Styled.Name>Anna Doe</Styled.Name> has accepted
                            your help request! You can now contact via messages.
                        </Styled.Group>
                        <Styled.Group>
                            <CloseButton />
                        </Styled.Group>
                    </Styled.Content>
                </Styled.Notification>
                <Styled.Notification>
                    <Styled.Group>
                        <ProfilePhoto
                            src="https://picsum.photos/100/100"
                            size={50}
                        />
                    </Styled.Group>
                    <Styled.Content>
                        <Styled.Group>
                            <Styled.Name>Ian Jones</Styled.Name> has accepted
                            your help request! You can now contact via messages.
                        </Styled.Group>
                        <Styled.Group>
                            <CloseButton />
                        </Styled.Group>
                    </Styled.Content>
                </Styled.Notification>
            </Styled.Notifications>
        </>
    );
};

export default NotificationsPanel;

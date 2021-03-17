import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import CloseButton from '../CloseButton/index';

const NotificationsPanel = ({ ...props }) => {
    return (
        <Styled.Wrapper {...props}>
            <Styled.Notification>
                <Styled.Group>
                    <ProfilePhoto
                        src="https://picsum.photos/100/100"
                        size={50}
                    />
                </Styled.Group>
                <Styled.Content>
                    <Styled.Group>
                        <Styled.Name>Rich Oswald</Styled.Name> has accepted your
                        help request! You can now contact via messages.
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
                        <Styled.Name>Anna Doe</Styled.Name> has accepted your
                        help request! You can now contact via messages.
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
                        <Styled.Name>Ian Jones</Styled.Name> has accepted your
                        help request! You can now contact via messages.
                    </Styled.Group>
                    <Styled.Group>
                        <CloseButton />
                    </Styled.Group>
                </Styled.Content>
            </Styled.Notification>
        </Styled.Wrapper>
    );
};

export default NotificationsPanel;

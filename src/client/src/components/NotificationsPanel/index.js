import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import CloseButton from '../CloseButton/index';

const NotificationsPanel = () => {
    return (
        <Styled.Wrapper>
            <Styled.Notification>
                <div>
                    <ProfilePhoto size={50} />
                </div>
                <Styled.Content>
                    <div>
                        <Styled.Name>Rich Oswald</Styled.Name> has accepted your
                        help request! You can now contact via messages.
                    </div>
                    <div>
                        <CloseButton />
                    </div>
                </Styled.Content>
            </Styled.Notification>
            <Styled.Notification>
                <div>
                    <ProfilePhoto size={50} />
                </div>
                <Styled.Content>
                    <div>
                        <Styled.Name>Anna Doe</Styled.Name> has accepted your
                        help request! You can now contact via messages.
                    </div>
                    <div>
                        <CloseButton />
                    </div>
                </Styled.Content>
            </Styled.Notification>
            <Styled.Notification>
                <div>
                    <ProfilePhoto size={50} />
                </div>
                <Styled.Content>
                    <div>
                        <Styled.Name>Ian Jones</Styled.Name> has accepted your
                        help request! You can now contact via messages.
                    </div>
                    <div>
                        <CloseButton />
                    </div>
                </Styled.Content>
            </Styled.Notification>
        </Styled.Wrapper>
    );
};

export default NotificationsPanel;

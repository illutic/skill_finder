import { Link } from 'react-router-dom';
import useDeleteNotification from '../../hooks/api/useDeleteNotification';
import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto';
import CloseButton from '../CloseButton/index';
import RequestActions from '../RequestActions';
import defaultProfilePhoto from '../../assets/default-profile.jpg';
import ROUTES from '../../constants/routes';
import NOTIFICATION_TYPES from '../../constants/notificationTypes';

const Notification = ({ data }) => {
    const deleteNotification = useDeleteNotification();

    return (
        <Styled.Notification key={data?.id}>
            <Styled.Group>
                <Link to={`/profile/${data?.content?.user?.id}`}>
                    <ProfilePhoto
                        src={
                            data?.content?.user?.profilePhoto
                                ? data.content.user.profilePhoto
                                : defaultProfilePhoto
                        }
                        size={50}
                    />
                </Link>
            </Styled.Group>
            <Styled.Content>
                <Styled.Group>
                    {data?.type === NOTIFICATION_TYPES.incomingRequest ? (
                        <>
                            <Link to={`/profile/${data?.content?.user?.id}`}>
                                <Styled.Name>
                                    {`${data?.content?.user?.firstName} ${data?.content?.user?.lastName} `}
                                </Styled.Name>
                            </Link>
                            <Styled.Span>
                                requested your help. Accept to start exchanging
                                messages.
                            </Styled.Span>
                            <Styled.Buttons>
                                <RequestActions
                                    userId={data?.content?.user?.id}
                                />
                            </Styled.Buttons>
                        </>
                    ) : data?.type === NOTIFICATION_TYPES.acceptedRequest ? (
                        <>
                            <Link to={`/profile/${data?.content?.user?.id}`}>
                                <Styled.Name>
                                    {`${data?.content?.user?.firstName} ${data?.content?.user?.lastName} `}
                                </Styled.Name>
                            </Link>
                            <Styled.Span>
                                has accepted your request. You can now{' '}
                                <Styled.ChatReference
                                    to={`${ROUTES.messages}/${data?.content?.chatId}`}
                                >
                                    exchange messages!
                                </Styled.ChatReference>
                            </Styled.Span>
                        </>
                    ) : NOTIFICATION_TYPES.deniedRequest ? (
                        <>
                            <Link to={`/profile/${data?.content?.user?.id}`}>
                                <Styled.Name>
                                    {`${data?.content?.user?.firstName} ${data?.content?.user?.lastName} `}
                                </Styled.Name>
                            </Link>
                            <Styled.Span>
                                has denied your request. Don't give up looking
                                for a perfect teacher!
                            </Styled.Span>
                        </>
                    ) : null}
                </Styled.Group>
                <Styled.Group>
                    <CloseButton onClick={() => deleteNotification(data?.id)} />
                </Styled.Group>
            </Styled.Content>
        </Styled.Notification>
    );
};

export default Notification;

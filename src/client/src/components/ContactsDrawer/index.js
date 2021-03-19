import { useContext } from 'react';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import ProfileThumbnail from '../ProfileThumbnail/index';
import ROUTES from '../../constants/routes';
import { ChatsContext } from '../../contexts/ChatsContextProvider';

const ContactsDrawer = ({ isActive }) => {
    const { chats } = useContext(ChatsContext);

    return (
        <Styled.ContactsDrawer active={isActive} onClick={stopPropagation}>
            {chats?.map((chat) =>
                chat.Users?.map((user) => (
                    <Styled.Contact key={user.id}>
                        <ProfileThumbnail
                            name={`${user.firstName} ${user.lastName}`}
                            title={user.title}
                            limited
                        />
                    </Styled.Contact>
                ))
            )}
            {/* Template: */}
            {/* <Styled.Contact key={chatId} to={`${ROUTES.messages}/${chatId}`}>
        <ProfileThumbnail
            name=fullName
            title=title
            photo=profilePhotoSource
            limited
        />
    </Styled.Contact> */}
            <Styled.Contact to={`${ROUTES.messages}/1`}>
                <ProfileThumbnail name="John Doe" title="Mathematics" limited />
            </Styled.Contact>
            <Styled.Contact to={`${ROUTES.messages}/2`}>
                <ProfileThumbnail name="John Doe" title="Mathematics" limited />
            </Styled.Contact>
        </Styled.ContactsDrawer>
    );
};

export default ContactsDrawer;

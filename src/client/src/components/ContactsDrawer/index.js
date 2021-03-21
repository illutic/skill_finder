import { useContext } from 'react';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import ProfileThumbnail from '../ProfileThumbnail/index';
import ROUTES from '../../constants/routes';
import { ChatsContext } from '../../contexts/ChatsContextProvider';
import defaultProfilePhoto from '../../assets/profile.gif';

const ContactsDrawer = ({ isActive }) => {
    const { chats } = useContext(ChatsContext);

    return (
        <Styled.ContactsDrawer active={isActive} onClick={stopPropagation}>
            {chats?.length
                ? chats.map((chat) =>
                      chat.Users?.map((user) => (
                          <Styled.Contact
                              key={chat.id}
                              to={`${ROUTES.messages}/${chat.id}`}
                          >
                              <ProfileThumbnail
                                  name={`${user.firstName} ${user.lastName}`}
                                  title={user.title}
                                  photo={
                                      user.profilePhoto
                                          ? user.profilePhoto
                                          : defaultProfilePhoto
                                  }
                                  limited
                              />
                          </Styled.Contact>
                      ))
                  )
                : null}
            {/* Template */}
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

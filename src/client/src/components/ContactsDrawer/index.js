import { useContext } from 'react';
import * as Styled from './styled';
import { ChatsContext } from '../../contexts/ChatsContextProvider';
import ProfileThumbnail from '../ProfileThumbnail/index';
import stopPropagation from '../../utils/stopPropagation';
import defaultProfilePhoto from '../../assets/default.jpg';
import ROUTES from '../../constants/routes';

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
        </Styled.ContactsDrawer>
    );
};

export default ContactsDrawer;

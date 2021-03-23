import { useContext } from 'react';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import ProfileThumbnail from '../ProfileThumbnail/index';
import ROUTES from '../../constants/routes';
import { ChatsContext } from '../../contexts/ChatsContextProvider';
import defaultProfilePhoto from '../../assets/default.jpg';

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

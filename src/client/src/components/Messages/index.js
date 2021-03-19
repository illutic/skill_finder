import { useState, useEffect, useContext } from 'react';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import { connect } from '../../constants/socket';
import { ChatsContext } from '../../contexts/ChatsContextProvider';
import ProfileThumbnail from '../ProfileThumbnail/index';

const Messages = () => {
    const [isContactsDrawerActive, setIsContactsDrawerActive] = useState(false);
    const [isFilesDrawerActive, setIsFilesDrawerActive] = useState(false);
    const ConnectedSocket = connect();
    const { chats } = useContext(ChatsContext);

    const closeAllDrawers = () => {
        setIsContactsDrawerActive(false);
        setIsFilesDrawerActive(false);
    };

    const toggleContactsDrawer = (e) => {
        e.stopPropagation();
        setIsContactsDrawerActive((previous) => !previous);
    };

    const toggleFilesDrawer = (e) => {
        e.stopPropagation();
        setIsFilesDrawerActive((previous) => !previous);
    };

    useEffect(() => {
        window.addEventListener('click', closeAllDrawers);
        return () => {
            window.removeEventListener('click', closeAllDrawers);
        };
    }, []);

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.ContactsDrawer
                    active={isContactsDrawerActive}
                    onClick={stopPropagation}
                >
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
                </Styled.ContactsDrawer>
                <Styled.Messages>
                    <Styled.Controls>
                        <Styled.Control onClick={toggleContactsDrawer}>
                            Contacts
                        </Styled.Control>
                        <Styled.Control onClick={toggleFilesDrawer}>
                            Files
                        </Styled.Control>
                    </Styled.Controls>
                </Styled.Messages>
                <Styled.FilesDrawer
                    active={isFilesDrawerActive}
                    onClick={stopPropagation}
                >
                    <Styled.Shared>Shared Files</Styled.Shared>
                    <Styled.Files>
                        <Styled.File>aliquyam.pdf</Styled.File>
                        <Styled.File>consetetur.txt</Styled.File>
                    </Styled.Files>
                </Styled.FilesDrawer>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Messages;

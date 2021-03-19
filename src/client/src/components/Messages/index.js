import { useState, useEffect } from 'react';
import * as Styled from './styled';
import ContactsDrawer from '../ContactsDrawer/index';
import FilesDrawer from '../FilesDrawer/index';
import Chat from '../Chat/index';
import { connect } from '../../constants/socket';

const Messages = () => {
    const [isContactsDrawerActive, setIsContactsDrawerActive] = useState(false);
    const [isFilesDrawerActive, setIsFilesDrawerActive] = useState(false);
    const ConnectedSocket = connect();

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
                <ContactsDrawer isActive={isContactsDrawerActive} />
                <Chat
                    contactsAction={toggleContactsDrawer}
                    filesAction={toggleFilesDrawer}
                />
                <FilesDrawer isActive={isFilesDrawerActive} />
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Messages;

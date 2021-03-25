import { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ChatsContext } from '../../contexts/ChatsContextProvider';
import * as Styled from './styled';
import ContactsDrawer from '../ContactsDrawer/index';
import FilesDrawer from '../FilesDrawer/index';
import Chat from '../Chat/index';
import ChatsMessage from '../ChatsMessage/index';
import ROUTES from '../../constants/routes';

const Messages = () => {
    const [isContactsDrawerActive, setIsContactsDrawerActive] = useState(false);
    const [isFilesDrawerActive, setIsFilesDrawerActive] = useState(false);
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
            {chats?.length ? (
                <Styled.Wrapper>
                    <Redirect to={`${ROUTES.messages}/${chats[0].id}`} />
                    <ContactsDrawer isActive={isContactsDrawerActive} />
                    <Chat
                        toggleContactsDrawer={toggleContactsDrawer}
                        toggleFilesDrawer={toggleFilesDrawer}
                    />
                    <FilesDrawer isActive={isFilesDrawerActive} />
                </Styled.Wrapper>
            ) : (
                <ChatsMessage />
            )}
        </Styled.Container>
    );
};

export default Messages;

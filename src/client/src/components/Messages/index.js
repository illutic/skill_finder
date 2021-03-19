import { useState, useEffect } from 'react';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import ContactsDrawer from '../ContactsDrawer/index';
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

    const sendMessage = (e) => {
        e.preventDefault();
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
                <Styled.Content>
                    <Styled.Controls>
                        <Styled.Control onClick={toggleContactsDrawer}>
                            Contacts
                        </Styled.Control>
                        <Styled.Control onClick={toggleFilesDrawer}>
                            Files
                        </Styled.Control>
                    </Styled.Controls>
                    <Styled.Messages>
                        <Styled.Message>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam vitae leo ut erat faucibus feugiat. Nam
                            dui ligula, ultrices quis pulvinar at, commodo ac
                            sem.
                        </Styled.Message>
                        <Styled.Message primary>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Styled.Message>
                        <Styled.Message>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Styled.Message>
                        <Styled.Message primary>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Styled.Message>
                        <Styled.Message>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Styled.Message>
                        <Styled.Message primary>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam vitae leo ut erat faucibus feugiat. Nam
                            dui ligula, ultrices quis pulvinar at, commodo ac
                            sem.
                        </Styled.Message>
                        <Styled.Message>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam vitae leo ut erat faucibus feugiat. Nam
                            dui ligula, ultrices quis pulvinar at, commodo ac
                            sem.
                        </Styled.Message>
                    </Styled.Messages>
                    <Styled.Form>
                        <Styled.TextArea type="text" placeholder="Aa" />
                        <Styled.PositionedSendButton onClick={sendMessage} />
                    </Styled.Form>
                </Styled.Content>
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

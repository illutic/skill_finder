import { useState, useEffect } from 'react';
import * as Styled from './styled';
import ProfileThumbnail from '../ProfileThumbnail/index';

const Messages = () => {
    const [isContactsDrawerActive, setIsContactsDrawerActive] = useState(false);
    const [isFilesDrawerActive, setIsFilesDrawerActive] = useState(false);

    const stopDrawerPropagation = (e) => {
        e.stopPropagation();
    };

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
                    onClick={stopDrawerPropagation}
                >
                    <Styled.Contact className="active">
                        <ProfileThumbnail
                            name="Rich Oswald"
                            title="Computer Science"
                            limited
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail
                            name="Ben Bailey"
                            title="Mathematics & Computer Science"
                            limited
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail
                            name="Ian Jones"
                            title="Mathematics Passionate"
                            limited
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail
                            name="John Doe"
                            title="Mathematics"
                            limited
                        />
                    </Styled.Contact>
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
                    onClick={stopDrawerPropagation}
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

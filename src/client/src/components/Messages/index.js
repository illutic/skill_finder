import { useState, useEffect } from 'react';
import * as Styled from './styled';
import Container from '../Container/index';
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

    const openContactsDrawer = (e) => {
        e.stopPropagation();
        closeAllDrawers();
        setIsContactsDrawerActive(true);
    };

    const openFilesDrawer = (e) => {
        e.stopPropagation();
        closeAllDrawers();
        setIsFilesDrawerActive(true);
    };

    useEffect(() => {
        window.addEventListener('click', closeAllDrawers);
        return () => {
            window.removeEventListener('click', closeAllDrawers);
        };
    }, []);

    return (
        <Container>
            <Styled.Wrapper>
                <Styled.ContactsDrawer
                    active={isContactsDrawerActive}
                    onClick={stopDrawerPropagation}
                >
                    <Styled.Contact className="active">
                        <ProfileThumbnail
                            name="Rich Oswald"
                            title="Computer Science"
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail
                            name="Ben Bailey"
                            title="Mathematics & Computer Science"
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail
                            name="Ian Jones"
                            title="Mathematics Passionate"
                        />
                    </Styled.Contact>
                    <Styled.Contact>
                        <ProfileThumbnail name="John Doe" title="Mathematics" />
                    </Styled.Contact>
                </Styled.ContactsDrawer>
                <div>
                    <div onClick={openContactsDrawer}>Contacts</div>
                    <div onClick={openFilesDrawer}>Files</div>
                </div>
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
        </Container>
    );
};

export default Messages;

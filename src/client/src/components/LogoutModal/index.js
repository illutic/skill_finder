import { useContext } from 'react';
import ReactDOM from 'react-dom';
import useLogout from '../../hooks/auth/useLogout';
import { LogoutModalContext } from '../../contexts/LogoutModalContextProvider';
import * as Styled from './styled';
import stopPropagation from '../../utils/stopPropagation';
import Heading from '../Heading';
import Button from '../Button/index';

const LogoutModal = () => {
    const { isLogoutModalActive, hideLogoutModal } = useContext(
        LogoutModalContext
    );
    const logOut = useLogout();

    return ReactDOM.createPortal(
        <Styled.Wrapper active={isLogoutModalActive} onClick={hideLogoutModal}>
            <Styled.Window onClick={stopPropagation}>
                <Heading>Are you leaving?</Heading>
                <Styled.Message>We are sad to see you go.</Styled.Message>
                <Styled.Controls>
                    <Button onClick={hideLogoutModal} outlined>
                        Go back
                    </Button>
                    <Button
                        onClick={() => {
                            logOut();
                            hideLogoutModal();
                        }}
                    >
                        Log out
                    </Button>
                </Styled.Controls>
            </Styled.Window>
        </Styled.Wrapper>,
        document.getElementById('logout-modal')
    );
};

export default LogoutModal;

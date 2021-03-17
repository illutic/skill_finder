import Heading from '../Heading';
import * as Styled from './styled';
import Button from '../Button/index';

const LogoutModal = () => {
    return (
        <Styled.Wrapper>
            <Styled.Window>
                <Heading>Are you leaving?</Heading>
                <Styled.Message>We are sad to see you go.</Styled.Message>
                <Styled.Controls>
                    <Button outlined>Go back</Button>
                    <Button>Log out</Button>
                </Styled.Controls>
            </Styled.Window>
        </Styled.Wrapper>
    );
};

export default LogoutModal;

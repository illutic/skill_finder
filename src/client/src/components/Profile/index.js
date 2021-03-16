import Container from '../Container/index';
import * as Styled from './styled';
import Subheading from '../Subheading/index';
import Button from '../Button/index';

const Profile = () => {
    return (
        <Container>
            <Styled.Banner>
                <Styled.Background>
                    <Styled.PositionedProfilePhoto size={150} />
                </Styled.Background>
                <Styled.Bar>
                    <Styled.User>
                        <Subheading>Marcus Wilson</Subheading>
                        <Styled.Title>Tech Student</Styled.Title>
                    </Styled.User>
                    <Styled.Action>
                        <Button>Reach out</Button>
                    </Styled.Action>
                </Styled.Bar>
            </Styled.Banner>
        </Container>
    );
};

export default Profile;

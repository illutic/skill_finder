import Container from '../Container/index';
import * as Styled from './styled';
import Heading from '../Heading/index';
import Button from '../Button/index';

const Profile = () => {
    return (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Banner>
                    <Styled.Background>
                        <Styled.AdjustedProfilePhoto
                            size={150}
                            src="https://picsum.photos/150/150"
                        />
                    </Styled.Background>
                    <Styled.Bar>
                        <Styled.User>
                            <Heading>Marcus Wilson</Heading>
                            <Styled.UserTitle>Tech Student</Styled.UserTitle>
                        </Styled.User>
                        <Styled.Action>
                            <Button>Reach out</Button>
                        </Styled.Action>
                    </Styled.Bar>
                </Styled.Banner>
                <Styled.Split>
                    <Styled.Section>
                        <Styled.SectionTitle>Description</Styled.SectionTitle>
                        <Styled.SectionParagraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr.
                        </Styled.SectionParagraph>
                    </Styled.Section>
                    <Styled.Section>
                        <Styled.SectionTitle>Skills</Styled.SectionTitle>
                        <Styled.Skills>
                            <Styled.Skill>Mathematics</Styled.Skill>
                            <Styled.Skill>Physics</Styled.Skill>
                            <Styled.Skill>AutoCAD</Styled.Skill>
                            <Styled.Skill>Shouting at children</Styled.Skill>
                        </Styled.Skills>
                    </Styled.Section>
                </Styled.Split>
            </Styled.Wrapper>
        </Container>
    );
};

export default Profile;

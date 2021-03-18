import Container from '../Container/index';
import * as Styled from './styled';
import Heading from '../Heading/index';
import HomeSlider from '../HomeSlider';
import ProfileThumbnail from '../ProfileThumbnail/index';
import CommunitySource from '../../assets/community.jpg';

const Home = () => {
    return (
        <Container>
            <Styled.Section>
                <Heading underlined>Featured skills</Heading>
                <HomeSlider />
            </Styled.Section>
            <Styled.Section>
                <Styled.Split>
                    <Styled.Content>
                        <Heading underlined>Our community</Heading>
                        <Styled.Paragraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                        </Styled.Paragraph>
                        <Styled.Profiles>
                            <ProfileThumbnail
                                name="John Smith"
                                title="Mathematics Passionate"
                                photo="https://picsum.photos/150/150"
                            />
                            <ProfileThumbnail
                                name="Rich Oswald"
                                title="Computer Science Teacher"
                                photo="https://picsum.photos/150/150"
                            />
                        </Styled.Profiles>
                    </Styled.Content>
                    <Styled.Display>
                        <Styled.Image src={CommunitySource} />
                    </Styled.Display>
                </Styled.Split>
            </Styled.Section>
        </Container>
    );
};

export default Home;

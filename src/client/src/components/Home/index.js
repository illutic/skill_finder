import { Link } from 'react-router-dom';
import useVerifiedUsers from '../../hooks/api/useVerifiedUsers';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import HomeSlider from '../HomeSlider';
import ProfileThumbnail from '../ProfileThumbnail/index';
import defaultProfilePhoto from '../../assets/default-profile.jpg';
import communityPhoto from '../../assets/community.jpg';

const Home = () => {
    const { verifiedUsers } = useVerifiedUsers();

    return (
        <Container spaced={true}>
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
                            {verifiedUsers?.length
                                ? verifiedUsers.map((user) => (
                                      <Link
                                          key={user.id}
                                          to={`/profile/${user.id}`}
                                      >
                                          <ProfileThumbnail
                                              name={`${user.firstName} ${user.lastName}`}
                                              title={user.title}
                                              photo={
                                                  user.profilePhoto
                                                      ? user.profilePhoto
                                                      : defaultProfilePhoto
                                              }
                                          />
                                      </Link>
                                  ))
                                : null}
                        </Styled.Profiles>
                    </Styled.Content>
                    <Styled.Display>
                        <Styled.Image src={communityPhoto} />
                    </Styled.Display>
                </Styled.Split>
            </Styled.Section>
        </Container>
    );
};

export default Home;

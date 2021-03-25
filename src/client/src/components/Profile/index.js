import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLocationId from '../../hooks/other/useLocationId';
import useProfile from '../../hooks/api/useProfile';
import useRequest from '../../hooks/api/useRequest';
import { UserContext } from '../../contexts/UserContextProvider';
import { AuthContext } from '../../contexts/AuthContextProvider';
import * as Styled from './styled';
import LoadingScreen from '../LoadingScreen';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import defaultProfilePhoto from '../../assets/default.jpg';
import ROUTES from '../../constants/routes';

const Profile = () => {
    const { isAuth } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const { profile, isProfileLoading, setProfileId } = useProfile();
    const { locationId } = useLocationId();
    const { sendRequest } = useRequest();

    useEffect(() => {
        setProfileId(locationId);
    }, [locationId, setProfileId]);

    return isProfileLoading ? (
        <LoadingScreen />
    ) : (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Banner>
                    <Styled.Background
                        src={
                            profile?.backgroundImage
                                ? profile.backgroundImage
                                : null
                        }
                    >
                        <Styled.AdjustedProfilePhoto
                            size={150}
                            src={
                                profile?.profilePhoto
                                    ? profile.profilePhoto
                                    : defaultProfilePhoto
                            }
                        />
                    </Styled.Background>
                    <Styled.Bar>
                        <Styled.User>
                            <Heading>
                                {profile?.firstName} {profile?.lastName}
                            </Heading>
                            <Styled.UserTitle>
                                {profile?.title ? profile.title : null}
                            </Styled.UserTitle>
                        </Styled.User>
                        <Styled.Action>
                            {isAuth ? (
                                profile?.id === user?.id ? (
                                    <Link to={ROUTES.settings}>
                                        <Button outlined>Edit profile</Button>
                                    </Link>
                                ) : (
                                    <Button
                                        onClick={() => sendRequest(profile?.id)}
                                    >
                                        Reach out
                                    </Button>
                                )
                            ) : null}
                        </Styled.Action>
                    </Styled.Bar>
                </Styled.Banner>
                <Styled.Split>
                    <Styled.Section>
                        <Styled.SectionTitle>Description</Styled.SectionTitle>
                        <Styled.SectionParagraph>
                            {profile?.description
                                ? profile.description
                                : 'No description.'}
                        </Styled.SectionParagraph>
                    </Styled.Section>
                    <Styled.Section>
                        <Styled.SectionTitle>Skills</Styled.SectionTitle>
                        <Styled.Skills>
                            {profile?.Skills?.length
                                ? profile.Skills.map((skill) => {
                                      return (
                                          <Styled.Skill
                                              key={skill.id}
                                          >{`${skill.name}`}</Styled.Skill>
                                      );
                                  })
                                : 'No skills to show.'}
                        </Styled.Skills>
                    </Styled.Section>
                </Styled.Split>
            </Styled.Wrapper>
        </Container>
    );
};

export default Profile;

import { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';
import sendRequest from '../../helpers/sendRequest';
import { UserContext } from '../../contexts/UserContextProvider';
import { AuthContext } from '../../contexts/AuthContextProvider';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import Loading from '../Loading/index';
import defaultProfilePhoto from '../../assets/default.jpg';
import ROUTES from '../../constants/routes';

const Profile = () => {
    const { profile: user, isLoading } = useProfile();
    const { user: loggedInUser } = useContext(UserContext);
    const { isAuth } = useContext(AuthContext);

    const sendDynamicRequest = useCallback(() => {
        sendRequest(user.id);
    }, [user]);

    return isLoading ? (
        <Loading />
    ) : (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Banner>
                    <Styled.Background
                        src={
                            user?.backgroundImage ? user.backgroundImage : null
                        }
                    >
                        <Styled.AdjustedProfilePhoto
                            size={150}
                            src={
                                user?.profilePhoto
                                    ? user.profilePhoto
                                    : defaultProfilePhoto
                            }
                        />
                    </Styled.Background>
                    <Styled.Bar>
                        <Styled.User>
                            <Heading>
                                {user?.firstName} {user?.lastName}
                            </Heading>
                            <Styled.UserTitle>
                                {user?.title ? user.title : null}
                            </Styled.UserTitle>
                        </Styled.User>
                        <Styled.Action>
                            {isAuth ? (
                                user?.id === loggedInUser?.id ? (
                                    <Link to={ROUTES.settings}>
                                        <Button outlined>Edit profile</Button>
                                    </Link>
                                ) : (
                                    <Button onClick={sendDynamicRequest}>
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
                            {user?.description
                                ? user.description
                                : 'No description.'}
                        </Styled.SectionParagraph>
                    </Styled.Section>
                    <Styled.Section>
                        <Styled.SectionTitle>Skills</Styled.SectionTitle>
                        <Styled.Skills>
                            {user?.Skills?.length
                                ? user.Skills.map((skill) => {
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

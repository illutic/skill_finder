import useUserData from '../../hooks/useUserData';
import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';
import Loading from '../Loading/index';
import PHOTO_TYPES from '../../constants/photoTypes';
import defaultProfilePhoto from '../../assets/profile.gif';

const Profile = () => {
    const { data: user, isLoading } = useUserData();
    return isLoading ? (
        <Loading />
    ) : (
        <Container spaced>
            <Styled.Wrapper>
                <Styled.Banner>
                    <Styled.Background
                        src={
                            user?.Photos?.find(
                                (photo) => photo.type === PHOTO_TYPES.background
                            )?.uri ?? null
                        }
                    >
                        <Styled.AdjustedProfilePhoto
                            size={150}
                            src={
                                user?.Photos?.find(
                                    (photo) =>
                                        photo.type === PHOTO_TYPES.profile
                                )?.uri ?? defaultProfilePhoto
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
                            <Button>Reach out</Button>
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

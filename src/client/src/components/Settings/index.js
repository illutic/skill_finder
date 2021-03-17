import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
import CloseButton from '../CloseButton/index';

const Settings = () => {
    return (
        <Container>
            <Styled.Section>
                <Heading underlined>Profile Settings</Heading>
                <Styled.Subsection>
                    <Styled.Subheading>Profile Photo</Styled.Subheading>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Background Image</Styled.Subheading>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Title</Styled.Subheading>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Label for="newTitle">
                                New Title
                            </Styled.Label>
                            <Styled.Input
                                name="newTitle"
                                id="newTitle"
                                type="text"
                                placeholder="Aa"
                            />
                        </Styled.Group>
                        <Styled.Submit outlined>Update</Styled.Submit>
                    </Styled.Form>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Description</Styled.Subheading>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Label for="newDescription">
                                New Description
                            </Styled.Label>
                            <Styled.Input
                                name="newDescription"
                                id="newDescription"
                                type="text"
                                placeholder="Aa"
                            />
                        </Styled.Group>
                        <Styled.Submit outlined>Update</Styled.Submit>
                    </Styled.Form>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Skills</Styled.Subheading>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Label for="newSkill">
                                New Skill
                            </Styled.Label>
                            <Styled.Input
                                name="newSkill"
                                id="newSkill"
                                type="text"
                                placeholder="Aa"
                            />
                        </Styled.Group>
                        <Styled.Submit outlined>Add</Styled.Submit>
                    </Styled.Form>
                    <Styled.Skills>
                        <Styled.Skill>
                            <Styled.SkillName>Mathematics</Styled.SkillName>
                            <CloseButton />
                        </Styled.Skill>
                        <Styled.Skill>
                            <Styled.SkillName>Physics</Styled.SkillName>
                            <CloseButton />
                        </Styled.Skill>
                    </Styled.Skills>
                </Styled.Subsection>
            </Styled.Section>
            <Styled.Section>
                <Heading underlined>Account Settings</Heading>
                <Styled.Subsection>
                    <Styled.Subheading>Email Address</Styled.Subheading>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Password</Styled.Subheading>
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Delete Account</Styled.Subheading>
                </Styled.Subsection>
            </Styled.Section>
        </Container>
    );
};

export default Settings;

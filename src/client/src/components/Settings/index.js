import * as Styled from './styled';
import Container from '../Container/index';
import Heading from '../Heading/index';
// import FormError from '../FormError/index';
import CloseButton from '../CloseButton/index';

const Settings = () => {
    return (
        <Container>
            <Styled.Section>
                <Heading underlined>Profile Settings</Heading>
                <Styled.Split limited>
                    <Styled.Subsection>
                        <Styled.Subheading>Profile Photo</Styled.Subheading>
                        <Styled.FileForm>
                            <Styled.Group>
                                <Styled.Label for="newPhoto">
                                    Upload a photo from your computer
                                </Styled.Label>
                                <Styled.File
                                    name="newPhoto"
                                    id="newPhoto"
                                    type="file"
                                />
                            </Styled.Group>
                            <Styled.FileSubmit outlined>
                                Change
                            </Styled.FileSubmit>
                        </Styled.FileForm>
                        {/* <FormError spaced>Error</FormError> */}
                    </Styled.Subsection>
                    <Styled.Subsection>
                        <Styled.Subheading>Background Image</Styled.Subheading>
                        <Styled.FileForm>
                            <Styled.Group>
                                <Styled.Label for="newBackground">
                                    Upload an image from your computer
                                </Styled.Label>
                                <Styled.File
                                    name="newBackground"
                                    id="newBackground"
                                    type="file"
                                />
                            </Styled.Group>
                            <Styled.FileSubmit outlined>
                                Change
                            </Styled.FileSubmit>
                        </Styled.FileForm>
                        {/* <FormError spaced>Error</FormError> */}
                    </Styled.Subsection>
                </Styled.Split>
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
                    {/* <FormError>Error</FormError> */}
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
                    {/* <FormError>Error</FormError> */}
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
                    {/* <FormError>Error</FormError> */}
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
                    <Styled.Header>
                        <Styled.Subheading>Email Address</Styled.Subheading>
                        <Styled.CurrentEmail>
                            Your current email address is
                            m***********n@*****.com
                        </Styled.CurrentEmail>
                    </Styled.Header>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label for="newEmail">
                                        New Email
                                    </Styled.Label>
                                    <Styled.Input
                                        name="newEmail"
                                        id="newEmail"
                                        type="email"
                                        placeholder="@"
                                    />
                                </Styled.Side>
                                <Styled.Side>
                                    <Styled.Label for="confirmPassword">
                                        Confirm Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="*"
                                    />
                                </Styled.Side>
                            </Styled.Split>
                        </Styled.Group>
                        <Styled.Submit outlined>Update</Styled.Submit>
                    </Styled.Form>
                    {/* <FormError>Error</FormError> */}
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Password</Styled.Subheading>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label for="newPassword">
                                        New Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="newPassword"
                                        id="newPassword"
                                        type="passwod"
                                        placeholder="*"
                                    />
                                </Styled.Side>
                                <Styled.Side>
                                    <Styled.Label for="oldPassword">
                                        Old Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="oldPassword"
                                        id="oldPassword"
                                        type="password"
                                        placeholder="*"
                                    />
                                </Styled.Side>
                            </Styled.Split>
                        </Styled.Group>
                        <Styled.Submit outlined>Update</Styled.Submit>
                    </Styled.Form>
                    {/* <FormError>Error</FormError> */}
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Delete Account</Styled.Subheading>
                    <Styled.Form>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label for="confirm">
                                        Type "Delete account" to confirm
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirm"
                                        id="confirm"
                                        type="text"
                                        placeholder="Aa"
                                    />
                                </Styled.Side>
                                <Styled.Side>
                                    <Styled.Label for="confirmPassword">
                                        Confirm Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="*"
                                    />
                                </Styled.Side>
                            </Styled.Split>
                        </Styled.Group>
                        <Styled.Submit outlined>Update</Styled.Submit>
                    </Styled.Form>
                    {/* <FormError>Error</FormError> */}
                </Styled.Subsection>
            </Styled.Section>
        </Container>
    );
};

export default Settings;

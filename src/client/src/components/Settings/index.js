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
                        <Styled.FileForm onSubmit={(e) => e.preventDefault()}>
                            <Styled.Group>
                                <Styled.Label htmlFor="newPhoto">
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
                        <Styled.FileForm onSubmit={(e) => e.preventDefault()}>
                            <Styled.Group>
                                <Styled.Label htmlFor="newBackground">
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Label htmlFor="newTitle">
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Label htmlFor="newDescription">
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Label htmlFor="newSkill">
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label htmlFor="newEmail">
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
                                    <Styled.Label htmlFor="confirmPassword-1">
                                        Confirm Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirmPassword-1"
                                        id="confirmPassword-1"
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label htmlFor="newPassword">
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
                                    <Styled.Label htmlFor="oldPassword">
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
                    <Styled.Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label htmlFor="confirm">
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
                                    <Styled.Label htmlFor="confirmPassword-2">
                                        Confirm Password
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirmPassword-2"
                                        id="confirmPassword-2"
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

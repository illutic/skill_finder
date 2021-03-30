import { useContext } from 'react';
import * as Styled from './styled';
import useUploadImage from '../../hooks/api/useUploadImage';
import useUpdateTitle from '../../hooks/api/useUpdateTitle';
import useUpdateDescription from '../../hooks/api/useUpdateDescription';
import useAddSkill from '../../hooks/api/useAddSkill';
import useDeleteSkill from '../../hooks/api/useDeleteSkill';
import useUpdateEmail from '../../hooks/api/useUpdateEmail';
import useUpdatePassword from '../../hooks/api/useUpdatePassword';
import useDeleteAccount from '../../hooks/api/useDeleteAccount';
import { UserContext } from '../../contexts/UserContextProvider';
import Container from '../Container/index';
import Heading from '../Heading/index';
import FormSuccess from '../FormSuccess';
import FormError from '../FormError/index';
import CloseButton from '../CloseButton/index';
import PHOTO_TYPES from '../../constants/photoTypes';

const Settings = () => {
    const { user } = useContext(UserContext);
    const {
        uploadImage: uploadProfilePhoto,
        success: profilePhotoSuccess,
        error: profilePhotoError,
    } = useUploadImage();
    const {
        uploadImage: uploadBackgroundImage,
        success: backgroundPhotoSuccess,
        error: backgroundPhotoError,
    } = useUploadImage();
    const {
        updateTitle,
        success: titleSuccess,
        error: titleError,
    } = useUpdateTitle();
    const {
        updateDescription,
        success: descriptionSuccess,
        error: descriptionError,
    } = useUpdateDescription();
    const { addSkill, error: skillError } = useAddSkill();
    const { deleteSkill } = useDeleteSkill();
    const {
        updateEmail,
        success: emailSuccess,
        error: emailError,
    } = useUpdateEmail();
    const {
        updatePassword,
        success: passwordSuccess,
        error: passwordError,
    } = useUpdatePassword();
    const { deleteAccount, error: accountError } = useDeleteAccount();

    return (
        <Container spaced>
            <Styled.Section>
                <Heading underlined>Profile Settings</Heading>
                <Styled.Split limited>
                    <Styled.Subsection>
                        <Styled.Subheading>Profile Photo</Styled.Subheading>
                        <Styled.FileForm
                            onSubmit={(e) =>
                                uploadProfilePhoto(e, PHOTO_TYPES.profile)
                            }
                        >
                            <Styled.Group>
                                <Styled.Label htmlFor="newPhoto">
                                    Upload a photo from your computer
                                </Styled.Label>
                                <Styled.File
                                    name="image"
                                    id="newPhoto"
                                    type="file"
                                />
                            </Styled.Group>
                            <Styled.FileSubmit outlined>
                                Upload
                            </Styled.FileSubmit>
                        </Styled.FileForm>
                        {profilePhotoSuccess ? (
                            <FormSuccess spaced>
                                {profilePhotoSuccess}
                            </FormSuccess>
                        ) : null}
                        {profilePhotoError ? (
                            <FormError spaced>{profilePhotoError}</FormError>
                        ) : null}
                    </Styled.Subsection>
                    <Styled.Subsection>
                        <Styled.Subheading>Background Image</Styled.Subheading>
                        <Styled.FileForm
                            onSubmit={(e) =>
                                uploadBackgroundImage(e, PHOTO_TYPES.background)
                            }
                        >
                            <Styled.Group>
                                <Styled.Label htmlFor="newBackground">
                                    Upload an image from your computer
                                </Styled.Label>
                                <Styled.File
                                    name="image"
                                    id="newBackground"
                                    type="file"
                                />
                            </Styled.Group>
                            <Styled.FileSubmit outlined>
                                Upload
                            </Styled.FileSubmit>
                        </Styled.FileForm>
                        {backgroundPhotoSuccess ? (
                            <FormSuccess spaced>
                                {backgroundPhotoSuccess}
                            </FormSuccess>
                        ) : null}
                        {backgroundPhotoError ? (
                            <FormError spaced>{backgroundPhotoError}</FormError>
                        ) : null}
                    </Styled.Subsection>
                </Styled.Split>
                <Styled.Subsection>
                    <Styled.Subheading>Title</Styled.Subheading>
                    <Styled.Form onSubmit={updateTitle}>
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
                    {titleSuccess ? (
                        <FormSuccess>{titleSuccess}</FormSuccess>
                    ) : null}
                    {titleError ? <FormError>{titleError}</FormError> : null}
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Description</Styled.Subheading>
                    <Styled.Form onSubmit={updateDescription}>
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
                    {descriptionSuccess ? (
                        <FormSuccess>{descriptionSuccess}</FormSuccess>
                    ) : null}
                    {descriptionError ? (
                        <FormError>{descriptionError}</FormError>
                    ) : null}
                </Styled.Subsection>
                <Styled.Subsection>
                    <Styled.Subheading>Skills</Styled.Subheading>
                    <Styled.Form onSubmit={addSkill}>
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
                    {skillError ? <FormError>{skillError}</FormError> : null}
                    <Styled.Skills>
                        {user?.Skills?.map((skill) => (
                            <Styled.Skill key={skill.id}>
                                <Styled.SkillName>
                                    {skill.name}
                                </Styled.SkillName>
                                <CloseButton
                                    onClick={(e) => deleteSkill(e, skill.id)}
                                />
                            </Styled.Skill>
                        ))}
                    </Styled.Skills>
                </Styled.Subsection>
            </Styled.Section>
            <Styled.Section>
                <Heading underlined>Account Settings</Heading>
                {user?.foreign ? null : (
                    <>
                        <Styled.Subsection>
                            <Styled.Header>
                                <Styled.Subheading>
                                    Email Address
                                </Styled.Subheading>
                                <Styled.CurrentEmail>
                                    Your current email address is {user?.email}
                                </Styled.CurrentEmail>
                            </Styled.Header>
                            <Styled.Form onSubmit={updateEmail}>
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
                                                autoComplete="email"
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
                                                autoComplete="current-password"
                                            />
                                        </Styled.Side>
                                    </Styled.Split>
                                </Styled.Group>
                                <Styled.Submit outlined>Update</Styled.Submit>
                            </Styled.Form>
                            {emailSuccess ? (
                                <FormSuccess spaced>{emailSuccess}</FormSuccess>
                            ) : null}
                            {emailError ? (
                                <FormError spaced>{emailError}</FormError>
                            ) : null}
                        </Styled.Subsection>
                        <Styled.Subsection>
                            <Styled.Subheading>Password</Styled.Subheading>
                            <Styled.Form onSubmit={updatePassword}>
                                <Styled.Group>
                                    <Styled.Split>
                                        <Styled.Side>
                                            <Styled.Label htmlFor="newPassword">
                                                New Password
                                            </Styled.Label>
                                            <Styled.Input
                                                name="newPassword"
                                                id="newPassword"
                                                type="password"
                                                placeholder="*"
                                                autoComplete="new-password"
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
                                                autoComplete="current-password"
                                            />
                                        </Styled.Side>
                                    </Styled.Split>
                                </Styled.Group>
                                <Styled.Submit outlined>Update</Styled.Submit>
                            </Styled.Form>
                            {passwordSuccess ? (
                                <FormSuccess spaced>
                                    {passwordSuccess}
                                </FormSuccess>
                            ) : null}
                            {passwordError ? (
                                <FormError spaced>{passwordError}</FormError>
                            ) : null}
                        </Styled.Subsection>
                    </>
                )}
                <Styled.Subsection>
                    <Styled.Subheading>Delete Account</Styled.Subheading>
                    <Styled.Form onSubmit={deleteAccount}>
                        <Styled.Group>
                            <Styled.Split>
                                <Styled.Side>
                                    <Styled.Label htmlFor="confirmPhrase">
                                        Type "Delete account"
                                    </Styled.Label>
                                    <Styled.Input
                                        name="confirmPhrase"
                                        id="confirmPhrase"
                                        type="text"
                                        placeholder="Aa"
                                        autoComplete="off"
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
                                        autoComplete="current-password"
                                    />
                                </Styled.Side>
                            </Styled.Split>
                        </Styled.Group>
                        <Styled.Submit outlined>Delete</Styled.Submit>
                    </Styled.Form>
                    {accountError ? (
                        <FormError spaced>{accountError}</FormError>
                    ) : null}
                </Styled.Subsection>
            </Styled.Section>
        </Container>
    );
};

export default Settings;

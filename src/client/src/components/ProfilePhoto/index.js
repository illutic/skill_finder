import * as Styled from './styled';

const ProfilePhoto = ({ size, src }) => {
    return (
        <Styled.Frame size={size}>
            <Styled.Photo src={src} />
        </Styled.Frame>
    );
};

export default ProfilePhoto;

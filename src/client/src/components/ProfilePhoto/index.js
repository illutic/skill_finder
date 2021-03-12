import * as Styled from './styled';

const ProfilePhoto = ({ size, src, ...rest }) => {
    return (
        <Styled.Frame size={size} {...rest}>
            <Styled.Photo src={src} />
        </Styled.Frame>
    );
};

export default ProfilePhoto;

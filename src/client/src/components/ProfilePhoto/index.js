import * as Styled from './styled';

const ProfilePhoto = ({ size, src, ...rest }) => {
    return (
        <Styled.Frame size={size} {...rest}>
            {src ? <Styled.Photo src={src} /> : null}
        </Styled.Frame>
    );
};

export default ProfilePhoto;

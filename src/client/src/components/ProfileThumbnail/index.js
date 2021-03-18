import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto/index';

const ProfileThumbnail = ({ name, title, photo, ...rest }) => {
    return (
        <Styled.Wrapper {...rest}>
            <ProfilePhoto src={photo} size={50} />
            <Styled.Details>
                <Styled.Name>{name}</Styled.Name>
                <Styled.Title>{title}</Styled.Title>
            </Styled.Details>
        </Styled.Wrapper>
    );
};

export default ProfileThumbnail;

import * as Styled from './styled';
import ProfilePhoto from '../ProfilePhoto/index';
import source from '../../assets/profile.jpg';

const NavigationProfile = () => {
    return (
        <Styled.Wrapper>
            <ProfilePhoto src={source} size={150} />
            <Styled.FullName>Marcus Wilson</Styled.FullName>
        </Styled.Wrapper>
    );
};

export default NavigationProfile;

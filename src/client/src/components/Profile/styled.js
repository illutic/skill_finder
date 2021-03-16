import styled from 'styled-components';
import ProfilePhoto from '../ProfilePhoto/index';

export const Banner = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 15px;
    overflow: hidden;
`;
export const Background = styled.div`
    position: relative;
    min-height: 150px; // to 300px
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 10px; // to padding: 35px 70px;
`;

export const PositionedProfilePhoto = styled(ProfilePhoto)`
    position: absolute;
    left: 50%;
    bottom: -25px;
    transform: translateX(-50%);
`;

export const User = styled.div`
    text-align: center;
`;

export const Title = styled.div``;

export const Action = styled.div`
    margin-top: 25px; // to 0
`;

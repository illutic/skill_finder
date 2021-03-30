import styled from 'styled-components';
import ProfilePhoto from '../ProfilePhoto/index';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div``;

export const Banner = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 15px;
    overflow: hidden;
`;

export const Background = styled.div`
    position: relative;
    min-height: 150px;
    background: ${({ theme, src }) =>
        src ? `url(${src})` : `${theme.colors.unique}`};
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    @media (min-width: ${SCREENS.large}) {
        min-height: 300px;
    }
`;

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 10px;
    @media (min-width: ${SCREENS.medium}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 35px 35px 35px 75px;
    }
`;

export const AdjustedProfilePhoto = styled(ProfilePhoto)`
    position: absolute;
    left: 50%;
    bottom: -25px;
    transform: translateX(-50%);
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    background-color: ${({ theme }) => theme.colors.positive};
    @media (min-width: ${SCREENS.medium}) {
        left: 182px;
    }
`;

export const User = styled.div`
    text-align: center;
`;

export const UserTitle = styled.div`
    margin-top: 5px;
    word-break: break-word;
`;

export const Action = styled.div`
    margin-top: 25px;
    @media (min-width: ${SCREENS.medium}) {
        margin-top: 0;
    }
`;

export const Split = styled.div`
    padding: 0 10px;
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        & > * {
            flex: 1;
        }
    }
`;

export const Section = styled.section`
    margin-top: 50px;
    @media (min-width: ${SCREENS.large}) {
        margin-top: 75px;
        &:first-child {
            margin-right: 75px;
        }
    }
    @media (min-width: ${SCREENS.extraLarge}) {
        &:first-child {
            margin-right: 100px;
        }
    }
`;

export const SectionTitle = styled.h3`
    font-family: ${({ theme }) => theme.typography.primary};
    font-size: ${({ theme }) => theme.typography.medium};
`;

export const SectionParagraph = styled.p`
    margin-top: 25px;
`;

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
`;

export const Skill = styled.div`
    padding: 10px 15px;
    margin: 0 15px 25px 0;
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 7px;
`;

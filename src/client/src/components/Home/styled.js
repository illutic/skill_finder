import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Section = styled.section`
    &:not(:first-child) {
        margin-top: 125px;
        padding-top: 75px;
        border-top: 1px solid ${({ theme }) => theme.colors.unique};
    }

    &:last-child {
        margin-right: 25px;
    }
`;

export const Paragraph = styled.p`
    margin-top: 50px;
    max-width: 550px;
`;

export const Profiles = styled.div`
    margin-top: 25px;
    & > *:not(:first-child) {
        margin-top: 15px;
    }
    @media (min-width: ${SCREENS.medium}) {
        display: flex;
        & > *:not(:first-child) {
            margin: 0 0 0 35px;
        }
    }
`;

export const Split = styled.div`
    @media (min-width: ${SCREENS.extraLarge}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Content = styled.div``;

export const Display = styled.div`
    display: none;
    overflow: hidden;
    border-radius: 15px;
    @media (min-width: ${SCREENS.extraLarge}) {
        display: block;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

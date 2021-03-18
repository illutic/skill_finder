import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    margin-bottom: 75px;
`;

export const Entries = styled.div`
    margin-top: 50px;
`;

export const Entry = styled.div`
    padding: 15px 0;
    & > a {
        display: inline-block;
    }
    @media (min-width: ${SCREENS.medium}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const User = styled.section`
    display: flex;
    align-items: center;
`;

export const Details = styled.div`
    margin-left: 15px;
`;

export const Name = styled.h3`
    font-size: ${({ theme }) => theme.typography.medium};
    font-family: ${({ theme }) => theme.typography.secondary};
    line-height: 1.25;
`;

export const Title = styled.p``;

export const Buttons = styled.div`
    margin-top: 15px; // to 0
    & > *:first-child {
        margin-right: 15px;
    }
`;

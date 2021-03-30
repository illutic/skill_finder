import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div``;

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
        align-items: center;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    & > *:first-child {
        margin-right: 15px;
    }
    @media (min-width: ${SCREENS.medium}) {
        margin-top: 0;
    }
`;

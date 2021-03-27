import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    @media (min-width: ${SCREENS.large}) {
        padding: 0 50px;
    }
`;

export const Wrapper = styled.div`
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        height: calc(100vh - 78px);
    }
`;

export const Controls = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    @media (min-width: ${SCREENS.large}) {
        display: none;
    }
`;

export const Control = styled.button`
    flex: 1;
    padding: 10px;
    background: transparent;
    cursor: pointer;
    &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.subtle};
    }
`;

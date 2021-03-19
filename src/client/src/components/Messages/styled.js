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

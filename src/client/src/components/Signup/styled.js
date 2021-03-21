import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 150px - 276px);
    & > * {
        flex: 1;
    }
    @media (min-width: ${SCREENS.medium}) {
        min-height: calc(100vh - 150px - 164px);
    }
    @media (min-width: ${SCREENS.large}) {
        min-height: calc(100vh - 150px - 156px);
    }
`;

export const Box = styled.div``;

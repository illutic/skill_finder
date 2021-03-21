import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
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

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Paragraph = styled.p`
    margin: 15px 0;
    text-align: center;
`;

export const Buttons = styled.div`
    & > *:first-child {
        margin-right: 15px;
    }
`;

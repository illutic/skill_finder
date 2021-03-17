import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 25px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition opacity 0.25s ease-in-out;
`;

export const Window = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 25px;
    width: calc(100% - 50px);
    max-width: 350px;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.positive};
    border-radius: 15px;
    text-align: center;
    @media (min-width: ${SCREENS.small}) {
        padding: 35px;
    }
`;

export const Message = styled.p`
    margin: 15px 0;
`;

export const Controls = styled.div`
    & > *:first-child {
        margin-right: 15px;
    }
`;

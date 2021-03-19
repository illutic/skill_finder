import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Drawer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    max-width: 90%;
    height: 100%;
    overflow-y: scroll;
    transform: ${({ active }) =>
        active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.25s ease-in-out;
    background: ${({ theme }) => theme.colors.positive};
    border-right: 1px solid ${({ theme }) => theme.colors.subtle};
    @media (min-width: ${SCREENS.large}) {
        position: static;
        z-index: 1;
        transform: translateX(0);
        max-width: 231px;
        transition: none;
    }
`;

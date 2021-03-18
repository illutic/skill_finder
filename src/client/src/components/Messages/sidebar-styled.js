import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SCREENS from '../../constants/screens';

export const SidebarContainer = styled.div`
    width: 250px;
    height: 100vh;
    d-flex flex-column;
    justify-content-center;
    overflow-auto;
    flex-grow-1;
`;

export const Link = styled(NavLink)`
    display: inline-block;
    position: relative;
    padding-bottom: 20px;
    &.active {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            bottom: 0;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            background-color: ${({ theme }) => theme.colors.attention};
        }
    }
    @media (min-width: ${SCREENS.large}) {
        padding-bottom: 32px;
    }
`;

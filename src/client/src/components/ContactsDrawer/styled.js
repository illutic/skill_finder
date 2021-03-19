import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

export const ContactsDrawer = styled(Drawer)`
    left: 0;
    min-width: 210px;
    padding: 25px 0px 25px 25px;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
    @media (min-width: ${SCREENS.large}) {
        padding: 25px 0;
    }
`;

export const Contact = styled(NavLink)`
    position: relative;
    display: block;
    padding-right: 50px;
    &:not(:first-child) {
        margin-top: 25px;
    }
    &.active::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: ${({ theme }) => theme.colors.attention};
    }
`;

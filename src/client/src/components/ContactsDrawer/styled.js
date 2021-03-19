import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SCREENS from '../../constants/screens';
import Drawer from '../Drawer/index';

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

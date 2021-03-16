import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NotificationButton from '../NotificationButton/index';
import SearchBar from '../SearchBar/index';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    position: relative;
    z-index: 100;
`;

export const Bar = styled.div`
    z-index: 1;
    padding-bottom: 20px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.positive};
`;

export const Relative = styled.div`
    position: relative;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 5px;
    @media (min-width: ${SCREENS.medium}) {
        margin: 20px 5px 0 5px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    & > *:first-child {
        margin-right: 10px;
        @media (min-width: ${SCREENS.large}) {
            margin-right: 0;
        }
    }
    & > *:last-child {
        @media (min-width: ${SCREENS.large}) {
            display: none;
        }
    }
`;

export const PositionedNotificationButton = styled(NotificationButton)`
    @media (min-width: ${SCREENS.large}) {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const PositionedSearchBar = styled(SearchBar)`
    @media (min-width: ${SCREENS.medium}) {
        position: absolute;
        top: 50%;
        left: 60px;
        width: 350px;
        transform: translateY(-50%);
    }
`;

export const Navigation = styled.nav`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    margin-bottom: 50px;
    @media (min-width: ${SCREENS.medium}) {
        margin-bottom: 75px;
    }
`;

export const RestrictedRelative = styled.div`
    @media (min-width: ${SCREENS.large}) {
        position: relative;
        max-width: 1180px;
        margin: 0 auto;
    }
`;

export const List = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.positive};
    transform: translateY(
        ${({ active }) => (active ? '0' : 'calc(-100% - 10px)')}
    );
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        justify-content: flex-end;
        left: auto;
        right: 87px;
        z-index: 1;
        max-width: 500px;
        transform: translateY(-100%);
        transition: none;
        background: transparent;
        box-shadow: none;
    }
`;

export const Item = styled.li`
    padding-top: 20px;
    text-align: center;
    &:not(:last-child) {
        border-bottom: 1px ${({ theme }) => theme.colors.subtle} solid;
    }
    @media (min-width: ${SCREENS.large}) {
        padding-top: 0;
        &:not(:last-child) {
            margin-right: 50px;
            border: none;
        }
    }
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
        padding-bottom: 21px;
    }
`;

export const Controls = styled.div``;

export const Control = styled.button`
    background: transparent;
    padding-bottom: 21px;
    cursor: pointer;
`;

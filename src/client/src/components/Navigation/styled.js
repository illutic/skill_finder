import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    margin-bottom: 50px;
`;

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

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 5px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    & > *:first-child {
        margin-right: 10px;
    }
`;

export const List = styled.ul`
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.unique};
    transform: translateY(
        ${({ active }) => (active ? '0' : 'calc(-100% - 10px)')}
    );
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
`;

export const Item = styled.li`
    padding-top: 20px;
    &:not(:last-child) {
        border-bottom: 1px ${({ theme }) => theme.colors.subtle} solid;
    }
    text-align: center;
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
`;

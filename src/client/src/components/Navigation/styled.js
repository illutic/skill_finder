import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
    position: relative;
    padding: 20px;
    width: 100%;
    border-bottom: 1px ${({ theme }) => theme.colors.subtle} solid;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Item = styled.li`
    position: relative;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

export const Link = styled(NavLink)`
    &.active {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: calc(-100% - 1px);
            width: 100%;
            height: 3px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            background-color: ${({ theme }) => theme.colors.attention};
        }
    }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
    margin-bottom: 50px;
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px ${({ theme }) => theme.colors.subtle} solid;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
    position: relative;
    &.active {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -25px;
            width: 100%;
            height: 3px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            background-color: ${({ theme }) => theme.colors.attention};
        }
    }
`;

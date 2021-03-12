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
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

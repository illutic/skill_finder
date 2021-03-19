import styled from 'styled-components';
import SCREENS from '../../constants/screens';
import Drawer from '../Drawer/index';

export const FilesDrawer = styled(Drawer)`
    width: 210px;
    @media (min-width: ${SCREENS.large}) {
        border-left: 1px solid ${({ theme }) => theme.colors.subtle};
    }
`;

export const Shared = styled.p`
    padding: 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const Files = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
`;

export const File = styled.li`
    text-decoration: underline;
    cursor: pointer;
    &:not(:first-child) {
        margin-top: 15px;
    }
`;

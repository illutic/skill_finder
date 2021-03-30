import styled from 'styled-components';
import SCREENS from '../../constants/screens';
import Drawer from '../Drawer/index';
import ArrowButton from '../ArrowButton/index';

export const FilesDrawer = styled(Drawer)`
    width: 210px;
    @media (min-width: ${SCREENS.large}) {
        position: relative;
        z-index: 1;
        overflow: ${({ areFilesShown }) =>
            areFilesShown ? 'scroll' : 'hidden'};
        border-left: 1px solid ${({ theme }) => theme.colors.subtle};
    }
`;

export const Shared = styled.div`
    display: flex;
    align-items: center;
    padding: 25px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.positive};
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    text-align: left;
    cursor: pointer;
`;

export const DisappearingArrowButton = styled(ArrowButton)`
    display: none;
    @media (min-width: ${SCREENS.large}) {
        display: block;
        margin-left: 15px;
        transform: rotate(
            ${({ areFilesShown }) => (areFilesShown ? '-180' : '0')}deg
        );
    }
`;

export const Files = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
    @media (min-width: ${SCREENS.large}) {
        position: relative;
        z-index: -1;
        transform: translateY(
            ${({ areFilesShown }) => (areFilesShown ? '0' : '-100%')}
        );
    }
`;

export const File = styled.li`
    max-width: 160px;
    overflow: hidden;
    text-decoration: underline;
    text-overflow: ellipsis;
    &:not(:first-child) {
        margin-top: 15px;
    }
`;

export const Link = styled.a`
    cursor: pointer;
`;

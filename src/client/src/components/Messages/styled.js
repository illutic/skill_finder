import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    @media (min-width: ${SCREENS.large}) {
        padding: 0 50px;
    }
`;

export const Wrapper = styled.div`
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        height: calc(100vh - 78px);
    }
`;

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

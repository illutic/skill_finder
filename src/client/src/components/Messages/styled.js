import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
`;

export const Wrapper = styled.div`
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        height: calc(100vh - 78px);
    }
`;

export const Drawer = styled.div`
    position: absolute;
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
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
    @media (min-width: ${SCREENS.large}) {
        position: static;
        transform: translateX(0);
        max-width: 231px;
        transition: none;
    }
`;

export const ContactsDrawer = styled(Drawer)`
    left: 0;
    padding: 25px 0px 25px 25px;
    @media (min-width: ${SCREENS.large}) {
        padding: 25px 0;
    }
`;

export const Contact = styled.div`
    position: relative;
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

export const FilesDrawer = styled(Drawer)`
    width: 260px;
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

export const Messages = styled.div`
    flex: 1;
    @media (min-width: ${SCREENS.large}) {
        padding: 25px;
    }
`;

export const Controls = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: 25px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.subtle};
    }
    @media (min-width: ${SCREENS.large}) {
        display: none;
    }
`;

export const Control = styled.button`
    background: transparent;
`;

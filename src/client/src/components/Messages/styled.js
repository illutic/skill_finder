import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SendButton from '../SendButton/index';
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

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Controls = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    @media (min-width: ${SCREENS.large}) {
        display: none;
    }
`;

export const Control = styled.button`
    flex: 1;
    padding: 25px;
    background: transparent;
    cursor: pointer;
    &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.subtle};
    }
`;

export const Messages = styled.section`
    display: flex;
    flex-direction: column;
    padding: 25px;
    max-height: calc(100vh - 100px - 137px - 82px);
    overflow-y: scroll;
    @media (min-width: ${SCREENS.medium}) {
        min-height: calc(100vh - 100px - 78px - 82px);
    }
    @media (min-width: ${SCREENS.large}) {
        min-height: calc(100vh - 100px - 78px);
    }
    @media (max-height: 550px) {
        min-height: calc(100vh);
    }
`;

export const Message = styled.p`
    align-self: ${({ primary }) => (primary ? 'flex-start' : 'flex-end')};
    padding: 15px;
    max-width: 80%;
    border-radius: 15px;
    background-color: ${({ theme, primary }) =>
        primary ? theme.colors.attention : theme.colors.unique};
    color: ${({ theme, primary }) =>
        primary ? theme.colors.positive : theme.colors.negative};
    &:not(:first-child) {
        margin-top: 25px;
    }
    @media (min-width: ${SCREENS.medium}) {
        max-width: 66%;
    }
`;

export const Form = styled.form`
    display: flex;
    height: 100px;
    border-top: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const TextArea = styled.textarea`
    display: block;
    padding: 25px 5px 25px 25px;
    width: 100%;
    height: 100%;
    resize: none;
    background-transparent;
`;

export const PositionedSendButton = styled(SendButton)`
    align-self: center;
    margin-right: 15px;
`;

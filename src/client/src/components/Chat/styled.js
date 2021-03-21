import styled from 'styled-components';
import SCREENS from '../../constants/screens';
import SendButton from '../SendButton/index';

export const Chat = styled.div`
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
    min-height: calc(100vh - 100px - 137px - 82px);
    overflow-y: scroll;
    @media (min-width: ${SCREENS.medium}) {
        padding: 50px;
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
    align-self: ${({ currentUser }) =>
        currentUser ? 'flex-start' : 'flex-end'};
    padding: 15px;
    max-width: 80%;
    border-radius: 15px;
    background-color: ${({ theme, currentUser }) =>
        currentUser ? theme.colors.attention : theme.colors.unique};
    color: ${({ theme, currentUser }) =>
        currentUser ? theme.colors.positive : theme.colors.negative};
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

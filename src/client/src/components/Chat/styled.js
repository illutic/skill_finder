import styled from 'styled-components';
import SCREENS from '../../constants/screens';
import AddButton from '../AddButton';
import SendButton from '../SendButton/index';

export const Chat = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Messages = styled.section`
    display: flex;
    flex-direction: column;
    padding: 25px;
    height: calc(100vh - 100px - 137px - 82px);
    overflow-y: scroll;
    @media (min-width: ${SCREENS.medium}) {
        padding: 50px;
        height: calc(100vh - 100px - 78px - 82px);
    }
    @media (min-width: ${SCREENS.large}) {
        padding: 25px;
        height: calc(100vh - 100px - 78px);
    }
    @media (max-height: 550px) {
        height: calc(100vh);
    }
`;

export const Message = styled.span`
    align-self: ${({ currentUser }) =>
        currentUser ? 'flex-start' : 'flex-end'};
    padding: 10px 15px;
    max-width: 80%;
    border-radius: 15px;
    background-color: ${({ theme, currentUser }) =>
        currentUser ? theme.colors.attention : theme.colors.unique};
    word-wrap: break-word;
    color: ${({ theme, currentUser }) =>
        currentUser ? theme.colors.positive : theme.colors.negative};
    &:not(:first-child) {
        margin-top: 25px;
    }
    @media (min-width: ${SCREENS.medium}) {
        max-width: 500px;
    }
`;

export const MessageBox = styled.form`
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

export const File = styled.input`
    padding: 10px 0;
`;

export const FileSubmit = styled(SendButton)`
    margin-top: 25px;
`;

export const FileForm = styled.form`
    margin-top: 35px;
`;

export const Label = styled(AddButton)``;

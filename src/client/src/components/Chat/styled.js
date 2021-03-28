import styled from 'styled-components';
import SCREENS from '../../constants/screens';

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

export const Message = styled.p`
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
    position: relative;
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
    background: transparent;
    &:disabled {
        background: transparent:
    }
`;

export const Buttons = styled.div`
    display: flex;

    & > * {
        align-self: center;
    }

    & > *:first-child {
        margin-right: 10px;
    }

    & > *:last-child {
        margin-right: 15px;
    }
`;

export const FileUpload = styled.div``;

export const FileLabel = styled.label`
    position: absolute;
    top: 25px;
    left: 25px;
    display: none;
    &.active {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        background-color: ${({ theme }) => theme.colors.positive};
        border: 1px solid ${({ theme }) => theme.colors.subtle};
        border-radius: 7px;
        cursor: pointer;
    }
`;

export const FileName = styled.div`
    margin-right: 15px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: underline;
    @media (min-width: ${SCREENS.medium}) {
        max-width: 200px;
    }
`;

export const FileInput = styled.input``;

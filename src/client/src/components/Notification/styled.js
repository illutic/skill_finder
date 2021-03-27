import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Notification = styled.div`
    font-size: ${({ theme }) => theme.typography.small};
    display: flex;
    padding: 15px 0;
    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.unique};
    }
`;

export const Group = styled.div``;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 15px;
    & > *:first-child {
        margin-right: 15px;
    }
`;

export const Name = styled.span`
    font-weight: 700;
`;

export const Span = styled.span``;

export const Buttons = styled.div`
    margin-top: 10px;
`;

export const ChatReference = styled(Link)`
    text-decoration: underline;
`;

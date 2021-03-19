import styled from 'styled-components';

export const Notifications = styled.div`
    position: absolute;
    z-index: 100;
    top: 50px;
    right: 0;
    padding: 5px 20px;
    max-width: 375px;
    max-height: 275px;
    overflow-y: scroll;
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.positive};
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: opacity 0.25s ease-in-out;
`;

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
    margin-left: 15px;
    & > *:first-child {
        margin-right: 15px;
    }
`;

export const Name = styled.span`
    font-weight: 700;
`;

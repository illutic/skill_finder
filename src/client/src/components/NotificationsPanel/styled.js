import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 375px;
    max-height: 275px;
    overflow-y: scroll;
    padding: 5px 20px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.positive};
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

import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 5px 20px;
    max-width: 375px;
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

export const Content = styled.p`
    display: flex;
    margin-left: 15px;
    & > *:first-child {
        margin-right: 15px;
    }
`;

export const Name = styled.span`
    font-weight: 700;
`;

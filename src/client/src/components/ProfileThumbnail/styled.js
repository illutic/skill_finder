import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Details = styled.div`
    margin-left: 15px;
`;

export const Name = styled.div`
    line-height: 1.25;
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.typography.small};
`;

import styled from 'styled-components';

export const Subheading = styled.h3`
    font-family: ${({ theme }) => theme.typography.secondary};
    font-size: ${({ theme }) => theme.typography.large};
    font-weight: 700;
`;

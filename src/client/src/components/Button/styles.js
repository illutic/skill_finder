import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    padding: 10px 15px;
    min-width: 85px;
    width: ${({ fixed }) => (fixed ? '115px' : 'auto')};
    border: ${({ theme, outlined }) =>
        outlined ? `1px solid ${theme.colors.attention}` : 'none'};
    border-radius: 7px;
    background-color: ${({ theme, outlined }) =>
        outlined ? 'transparent' : theme.colors.attention};
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 300;
    text-align: center;
    color: ${({ theme, outlined }) =>
        outlined ? theme.colors.attention : theme.colors.positive};
    &:hover {
        cursor: pointer;
    }
`;
